import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "accessories",
    src: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
  {
    _id: uuid(),
    categoryName: "books",
    src: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    _id: uuid(),
    categoryName: "clothing",
    src: "https://res.cloudinary.com/sweta-agarwalla/image/upload/v1684134234/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7_t6xzte.jpg",
  },

  {
    _id: uuid(),
    categoryName: "lifestyle",
    src: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    _id: uuid(),
    categoryName: "stationery",
    src: "https://images.unsplash.com/photo-1581239125411-f5e754e060c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    _id: uuid(),
    categoryName: "wallart",
    src: "https://images.pexels.com/photos/3952028/pexels-photo-3952028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
