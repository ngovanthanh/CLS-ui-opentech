import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { DialogService } from '../../dialog/dialog-service/dialog.service';
import { Grouping, Volume } from '../../shared/models';
import { ListService } from '../../shared/components/list/list.service';
import { WithUnsubscribe } from '../../utils/mixins/with-unsubscribe';
import { VmService } from '../../vm/shared/vm.service';
import { ViewMode } from '../../shared/components/view-mode-switch/view-mode-switch.component';
import { State, UserTagsActions, UserTagsSelectors } from '../../root-store';

@Component({
  selector: 'cs-volume-page',
  templateUrl: 'volume-page.component.html',
  providers: [ListService]
})
export class VolumePageComponent extends WithUnsubscribe() implements OnInit {
  @Input() public volumes: Array<Volume>;
  @Input() public query: string;
  @Input() public isLoading: boolean;
  @Input() public groupings: Array<Grouping>;
  @Input() public selectedGroupings: Array<Grouping>;

  public mode: ViewMode;
  public viewModeKey = 'volumePageViewMode';

  constructor(
    public listService: ListService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private vmService: VmService,
    private store: Store<State>
  ) {
    super();
  }

  public ngOnInit() {
    if (this.volumes.length && this.shouldShowSuggestionDialog) {
      this.showSuggestionDialog();
    }
  }

  public changeMode(mode) {
    this.mode = mode;
  }

  public activate() {
    this.vmService.getListWithDetails()
      .map(res => res.length)
      .subscribe((res) => {
        if (res !== 0) {
          this.showCreationDialog();
        } else {
          this.showConfirmationDialog();
        }
      });
  }

  public showConfirmationDialog() {
    return this.dialogService.confirm({
      width: '466px',
      message: 'DIALOG_MESSAGES.VOLUME.CONFIRM_CREATION',
      confirmText: 'COMMON.CONTINUE',
      declineText: 'COMMON.CANCEL'
    })
      .subscribe((isContinue) => {
        if (isContinue) {
          this.showCreationDialog();
        }
      });
  }

  public showCreationDialog(): void {
    this.router.navigate(['./create'], {
      queryParamsHandling: 'preserve',
      relativeTo: this.activatedRoute
    });
  }

  private get shouldShowSuggestionDialog(): boolean {
    return !this.volumes.length && !this.isCreateVolumeInUrl;
  }

  private get isCreateVolumeInUrl(): boolean {
    return this.activatedRoute.children.length
      && this.activatedRoute.children[0].snapshot.url[0].path === 'create';
  }

  private showSuggestionDialog(): void {
    if (this.isCreateVolumeInUrl) {
      return;
    }

    this.store.select(UserTagsSelectors.getIsAskToCreateVolume)
      .first()
      .filter(Boolean)
      .subscribe(() => {
        this.dialogService.askDialog({
          message: 'SUGGESTION_DIALOG.WOULD_YOU_LIKE_TO_CREATE_VOLUME',
          actions: [
            {
              handler: () => this.activate(),
              text: 'COMMON.YES'
            },
            { text: 'COMMON.NO' },
            {
              handler: () => {
                this.store.dispatch(new UserTagsActions.UpdateAskToCreateVolume({ value: false }))
              },
              text: 'SUGGESTION_DIALOG.NO_DONT_ASK'
            }
          ],
          disableClose: false,
          width: '320px'
        });

      });
  }
}
