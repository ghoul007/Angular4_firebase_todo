import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "../../models/item";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  items: Item[];
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }
}
