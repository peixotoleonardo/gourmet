
import { CategoryDish } from '@/domain/entities/category-dish';
import { Dish } from '@/domain/entities/dish';

const pasta = new CategoryDish('massa');
const lasanha = new Dish('lasanha');

pasta.addDish(lasanha);

export const categoriesDish: CategoryDish[] = [
  pasta,
  new CategoryDish('Bolo de chocolate')
]
