import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/products", () => {
        return [
          {
            id: 1,
            name: "Wooden Wall Clock",
            price: 699,
            actualPrice: 1699,
            quantity: 1,
            url: "/Images/Product-1.png",
            description:
              "Elevate your space with our exquisite Helvetica Font Wall Poster. This poster showcases the timeless beauty and elegance of the Helvetica typeface",
          },
          {
            id: 2,
            name: "Wooden Vase With Greenery Decoration",
            price: 999,
            actualPrice: 2599,
            quantity: 1,
            url: "/Images/Product-2.png",
            description:
              "Enhance your living space with our exquisite Wooden Vase adorned with lush greenery, adding a touch of natural elegance to your home decor.",
          },
          {
            id: 3,
            name: "Helvetica Font Wall Poster with Frame",
            price: 1299,
            actualPrice: 2999,
            quantity: 1,
            url: "/Images/Product-3.png",
            description:
              "Elevate your space with the Helvetica Font Wall Poster, complete with a stylish frame for modern decor.",
          },
          {
            id: 4,
            name: "Minimal Ceiling Mounted Lamp",
            price: 799,
            actualPrice: 1199,
            quantity: 1,
            url: "/Images/Product-4.png",
            description:
              "Illuminate your room with the Minimal Ceiling Mounted Lamp, a sleek and minimalist lighting solution.",
          },
          {
            id: 5,
            name: "Ceiling Mounted Rope Plant Pot",
            price: 599,
            actualPrice: 999,
            quantity: 1,
            url: "/Images/Product-5.png",
            description:
              "Add a touch of nature with the Ceiling Mounted Rope Plant Pot, a stylish hanging planter for greenery.",
          },
          {
            id: 6,
            name: "Ceramic Tea Cups",
            price: 399,
            actualPrice: 599,
            quantity: 1,
            url: "/Images/Product-6.png",
            description:
              "Sip your tea in style with these Ceramic Tea Cups, crafted for a cozy tea time experience.",
          },
          {
            id: 7,
            name: "Pink Ceramic Table Vase",
            price: 499,
            actualPrice: 799,
            quantity: 1,
            url: "/Images/Product-7.png",
            description:
              "Enhance your table decor with the Pink Ceramic Table Vase, a charming addition to any room.",
          },
          {
            id: 8,
            name: "Textured Ceramic Table Vase",
            price: 549,
            actualPrice: 899,
            quantity: 1,
            url: "/Images/Product-8.png",
            description:
              "Elevate your space with the Textured Ceramic Table Vase, an eye-catching centerpiece for modern decor.",
          },
          {
            id: 9,
            name: "Ceiling Mounted Lamp",
            price: 999,
            actualPrice: 1599,
            url: "/Images/Product-9.png",
            description:
              "Brighten up your room with the Ceiling Mounted Lamp, a versatile and stylish lighting solution.",
          },
          {
            id: 10,
            name: "Comfy Wooden Chair",
            price: 1499,
            actualPrice: 2499,
            url: "/Images/Product-10.png",
            description:
              "Relax in comfort with the Comfy Wooden Chair, designed for both style and relaxation.",
          },
          {
            id: 11,
            name: "Gradient Ceramic Glass",
            price: 449,
            actualPrice: 699,
            quantity: 1,
            url: "/Images/Product-11.png",
            description:
              "Sip your beverages in the stylish Gradient Ceramic Glass, a modern take on classic glassware.",
          },
          {
            id: 12,
            name: "Hoop Ceramic Table Vase",
            price: 499,
            actualPrice: 799,
            quantity: 1,
            url: "/Images/Product-12.png",
            description:
              "Add a touch of contemporary elegance with the Hoop Ceramic Table Vase, a modern decor piece.",
          },
        ];
      });
    },
  });

  return server;
}
