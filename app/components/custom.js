import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CustomComponent extends Component {
  @tracked items = [];
  @tracked input = '';

  @action
  onChange(e) {
    this.input = e.target.value;
  }

  @action
  addItem() {
    let temp = [...this.items];
    temp.push(this.input);
    this.items = temp;
    this.input = '';
  }

  @action
  deleteItem(itemId) {
    let tempItems = [...this.items];
    this.items = tempItems.filter((_, index) => {
      return index != itemId;
    });
  }
}
