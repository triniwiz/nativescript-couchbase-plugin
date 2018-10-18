import { SearchModel } from './search-view-model';
import { EventData } from 'tns-core-modules/ui/core/view';
import { Page } from 'tns-core-modules/ui/page';
let vm;
let page;
export function pageLoaded(args: EventData) {
  vm = new SearchModel();
  page = args.object as Page;
  page.bindingContext = vm;
  page.getViewById('search').on('textChange', (args: any) => {
    vm.set('input', args.object.text);
  });
}
