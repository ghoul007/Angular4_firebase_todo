
import { Item } from "../../models/item";
import { ItemService } from '../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: "",
    description: ""
  };
  constructor(private ItemService: ItemService) {}

  onSubmit() {
    if (this.item.title != "" && this.item.description != "") {
      this.ItemService.addItem(this.item);
      this.item.title = "";
      this.item.description = "";
    }
  }

  ngOnInit() {}
}
