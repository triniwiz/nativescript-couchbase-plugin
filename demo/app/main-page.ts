import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { topmost } from 'tns-core-modules/ui/frame';
let vm;
let page: pages.Page;
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  vm = new HelloWorldModel();
  page = args.object as pages.Page;
  page.bindingContext = vm;
  page.getViewById('input').on('textChange', (args: any) => {
    vm.set('input', args.object.text);
  });
}

export function addNew(args) {
  vm.addItem();
  const input = page.getViewById('input') as any;
  if (input) {
    input.text = '';
  }
}

export function goToSearch(args) {
  topmost().navigate('search/search-page');
}
