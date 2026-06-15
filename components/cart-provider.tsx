"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  itemCount: number
  addItem: (product: Omit<CartItem, "quantity">, quantity?: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, delta: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = "balikavi-cart"

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Profesyonel Olta Kamışı Carbon Pro X",
    price: 2499,
    quantity: 1,
    image: "/professional-fishing-rod.jpg",
    category: "Olta Kamışları",
  },
  {
    id: 2,
    name: "Makara Seti - Pro Series",
    price: 1899,
    quantity: 2,
    image: "/fishing-reel-set.jpg",
    category: "Makaralar",
  },
  {
    id: 3,
    name: "Balık Yemleri Koleksiyonu",
    price: 349,
    quantity: 1,
    image: "/fishing-lures-collection.jpg",
    category: "Yemler",
  },
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialItems)
  const [hydrated, setHydrated] = useState(false)

  // Sepeti tarayıcıdan yükle (sayfa yenilemelerinde korunması için)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch {
      // yoksay
    }
    setHydrated(true)
  }, [])

  // Değişiklikleri kaydet
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // yoksay
    }
  }, [items, hydrated])

  const addItem = (product: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, itemCount, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
