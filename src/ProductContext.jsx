// src/context/ProductContext.jsx
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { allProducts, popularProducts, featuredProducts, gamingProducts } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchQuery, setSearchQuery] = useState('');

  // Extraire les catégories uniques
  useEffect(() => {
    const uniqueCategories = ['all', ...new Set(allProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  // Filtrer et trier les produits
  useEffect(() => {
    let filtered = [...products];

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrer par plage de prix
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filtrer par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Trier
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        break;
      default: // 'popular'
        filtered.sort((a, b) => b.popularity - a.popularity);
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, sortBy, searchQuery]);

  const getProductById = useCallback((id) => {
    return products.find(product => product.id === id);
  }, [products]);

  const getRelatedProducts = useCallback((product, limit = 4) => {
    return products
      .filter(p => 
        p.id !== product.id && 
        (p.category === product.category || 
         p.tags.some(tag => product.tags.includes(tag)))
      )
      .slice(0, limit);
  }, [products]);

  const value = {
    products,
    filteredProducts,
    popularProducts,
    featuredProducts,
    gamingProducts,
    categories,
    selectedCategory,
    sortBy,
    priceRange,
    searchQuery,
    setSelectedCategory,
    setSortBy,
    setPriceRange,
    setSearchQuery,
    getProductById,
    getRelatedProducts,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};