import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Storage } from '../../shared/models/storage.model';
import ClipboardJS from 'clipboard';

@Component({
  selector: 'app-theme-header',
  templateUrl: './theme-header.component.html',
  styleUrls: ['./theme-header.component.scss']
})
export class ThemeHeaderComponent implements OnInit, OnDestroy {
  @Input() storage: Storage;
  subscription = new Subscription();
  themeTitle = '';
  isImportVisible = false;
  importText = '';
  isExportVisible = false;
  exportText = '';
  clipboard: ClipboardJS;

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    const sub = this.eventService.event('storage-service').subscribe(_ => {
      this.storage.save();
    });
    this.subscription.add(sub);
    this.clipboard = new ClipboardJS('.exportTextBtn', {
      target: '#exportText'
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.clipboard.destroy();
  }

  toggleImport() {
    this.isImportVisible = !this.isImportVisible;
  }

  toggleExport() {
    this.isExportVisible = !this.isExportVisible;
    this.exportText = this.storage.exportAll();
  }

  handleImport() {
    this.storage.importAll(this.importText);
    this.toggleImport();
  }

  copy() {

  }

}
