import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

// MODELE
export interface StockItem {
  name: string;
  marque?: string;
  modele?: string;
  format: string;
  quantity: number;
}

export interface SubCategory {
  name: string;
  items: StockItem[];
}

export interface Category {
  name: string;
  subCategories?: SubCategory[];
  items?: StockItem[];
}

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
  providers: [MessageService]
})
export class StockManagementComponent implements OnInit {
  categories: TreeNode[] = [];
  selectedCategoryItems: StockItem[] = [];
  filteredItems: StockItem[] = [];
  selectedNode: TreeNode | null = null;
  displayAddCategory: boolean = false;
  displayEditCategory: boolean = false;
  displayAddElement: boolean = false;
  displayEditElement: boolean = false;
  newCategoryName: string = '';
  editCategoryName: string = '';
  newElement: StockItem = { name: '', marque: '',  modele: '',format: '', quantity: 0 };
  editElement: StockItem = { name: '', marque: '',  modele: '', format: '', quantity: 0 };

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.categories = [
      {
        label: 'Matériaux',
        children: [
          {
            label: 'Bois',
            children: [
              { label: 'Planches', data: { name: 'Planches', format: '2m x 10cm', quantity: 50 } },
              { label: 'Chevrons', data: { name: 'Chevrons', format: '3m x 5cm', quantity: 20 } }
            ]
          },
          {
            label: 'Tôles',
            data: { name: 'Tôles', format: '1m x 2m', quantity: 30 }
          }
        ]
      },
      {
        label: 'Outils',
        children: [
          { label: 'Perceuse', data: { name: 'Perceuse',marque: 'Makita', modele: 'A50' ,format: '500W', quantity: 2 } },
          { label: 'Scie Circulaire', data: { name: 'Scie Circulaire', format: '1000W', quantity: 1 } }
        ]
      },
      {
        label: 'Divers',
        data: { name: 'Divers', format: 'Divers Formats', quantity: 50 }
      }
    ];
    this.filteredItems = this.selectedCategoryItems;
  }

  onCategorySelect(event: any) {
    const node = event.node;
    this.selectedNode = node;
    this.selectedCategoryItems = [];
    this.collectItemsRecursively(node);
    this.filteredItems = this.selectedCategoryItems;
  }

  collectItemsRecursively(node: TreeNode) {
    if (node.data) {
      this.selectedCategoryItems.push(node.data);
    }
    if (node.children) {
      for (let child of node.children) {
        this.collectItemsRecursively(child);
      }
    }
  }

  showAddCategoryDialog() {
    this.newCategoryName = '';
    this.displayAddCategory = true;
  }

  showEditCategoryDialog() {
    if (this.selectedNode) {
      this.editCategoryName = this.selectedNode.label || '';
      this.displayEditCategory = true;
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Attention', detail: 'Aucune catégorie sélectionnée.' });
    }
  }

  addCategory() {
    const newCategory: TreeNode = { label: this.newCategoryName, children: [] };
    this.categories.push(newCategory);
    this.displayAddCategory = false;
    this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Catégorie créée avec succès.'});
  }

  updateCategory() {
    if (this.selectedNode) {
      this.selectedNode.label = this.editCategoryName;
      this.displayEditCategory = false;
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Catégorie modifiée avec succès.'});
    }
  }

  showAddElementDialog() {
    if (this.selectedNode && this.selectedNode.children) {
      this.newElement = { name: '', format: '', quantity: 0 };
      this.displayAddElement = true;
    } else {
      this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Aucune catégorie sélectionnée ou la catégorie n\'est pas valide.'});
    }
  }

  showEditElementDialog() {
    if (this.selectedNode && !this.selectedNode.children) {
      this.editElement = { ...this.selectedNode.data };
      this.displayEditElement = true;
    } else {
      this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Aucun élément sélectionné ou l\'élément a des sous-éléments.'});
    }
  }

  addElement() {
    if (this.selectedNode && this.selectedNode.children) {
      const newElement: TreeNode = { label: this.newElement.name, data: this.newElement };
      this.selectedNode.children.push(newElement);
      this.displayAddElement = false;
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Élément créé avec succès.'});
    }
  }

  updateElement() {
    if (this.selectedNode && !this.selectedNode.children) {
      this.selectedNode.label = this.editElement.name;
      this.selectedNode.data = this.editElement;
      this.displayEditElement = false;
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Élément modifié avec succès.'});
    }
  }

  incrementQuantity(item: StockItem) {
    item.quantity += 1;
  }

  decrementQuantity(item: StockItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
  }

  filterItems(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.selectedCategoryItems.filter(item => item.name.toLowerCase().includes(query));
  }

  deleteCategory() {
    if (this.selectedNode) {
      const parent = this.findParentNode(this.categories, this.selectedNode);
      if (parent) {
        // @ts-ignore
        parent.children = parent.children.filter(child => child !== this.selectedNode);
      } else {
        this.categories = this.categories.filter(node => node !== this.selectedNode);
      }
      this.selectedNode = null;
      this.selectedCategoryItems = [];
      this.filteredItems = [];
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Catégorie supprimée avec succès.'});
    } else {
      this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Aucune catégorie sélectionnée.'});
    }
  }

  deleteElement() {
    if (this.selectedNode && !this.selectedNode.children) {
      const parent = this.findParentNode(this.categories, this.selectedNode);
      if (parent) {
        // @ts-ignore
        parent.children = parent.children.filter(child => child !== this.selectedNode);
      } else {
        this.categories = this.categories.filter(node => node !== this.selectedNode);
      }
      this.selectedNode = null;
      this.selectedCategoryItems = [];
      this.filteredItems = [];
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Élément supprimé avec succès.'});
    } else {
      this.messageService.add({severity: 'warn', summary: 'Attention', detail: 'Aucun élément sélectionné ou l\'élément a des sous-éléments.'});
    }
  }

  findParentNode(nodes: TreeNode[], child: TreeNode): TreeNode | null {
    for (let node of nodes) {
      if (node.children && node.children.includes(child)) {
        return node;
      } else if (node.children) {
        const found = this.findParentNode(node.children, child);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
}
