export type ProductProps = {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  onAdd: () => void;
  onRemove: () => void;
};