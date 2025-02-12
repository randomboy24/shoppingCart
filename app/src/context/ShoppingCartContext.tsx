import { createContext, ReactNode, useState, useEffect } from "react";

interface itemsTypes {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

interface ShoppingCartContextTypes {
  items: itemsTypes[];
  setItems: React.Dispatch<React.SetStateAction<itemsTypes[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextTypes>({
  items: [],
  setItems: () => {},
});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<itemsTypes[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const formattedItems = data.products.map((product: any) => ({
          id: product.id,
          name: product.title,
          imgUrl: product.thumbnail,
          price: product.price,
          quantity: 0,
        }));

        setItems(formattedItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
