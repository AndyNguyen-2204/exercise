import React, { useEffect } from "react";
import { factorial, isInt } from "./module";
interface Person {
  name: string;
  age: number;
  email: string;
}
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export default function Request() {
  enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
  }
  const listProduct = [
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: 100,
      quantity: 1,
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      price: 20,
      quantity: 3,
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      price: 60,
      quantity: 10,
    },
    {
      id: 5,
      name: "Sản phẩm 5",
      price: 200,
      quantity: 20,
    },
  ];
  // request 1
  const sum = (ArrInt: []) => {
    return ArrInt.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
  };
  // request 2
  const personRT = (person: Person) => {
    console.log({
      name: person.name,
      age: person.age,
      email: person.email,
    });
  };
  // request 3
  function firstItemsArr(arr: [1, 2, 3, 4]) {
    return arr.length > 0 ? arr[0] : undefined;
  }
  // request 4
  function renderColor(color: Color): void {
    switch (color) {
      case Color.Red:
        console.log("Màu đỏ");
        break;
      case Color.Green:
        console.log("Màu xanh la");
        break;
      case Color.Blue:
        console.log("Màu xanh duong");
        break;
      default:
        console.log("Khong co mau");
    }
  }
  //rq 5
  function rectangle(a: number, b: number) {
    return `Diện tích hình chữ nhật là ${a * b}`;
  }
  //rq 6
  function logMethod(methodName: string, params: number[], result: any) {
    console.log(
      `Gọi phương thức ${methodName} với các tham số: ${JSON.stringify(params)}`
    );
    console.log(`Kết quả của ${methodName}: ${JSON.stringify(result)}`);
    return {
      logMethod,
    };
  }
  const phuongThuc1 = (param1: number, param2: number) => {
    logMethod("phuongThuc1", [param1, param2], null);
  };

  const phuongThuc2 = (param1: number, param2: number) => {
    logMethod("phuongThuc2", [param1, param2], null);
  };

  //rq 7
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // rq8
  const giaiThuaCua5 = factorial(5);
  const soNguyenTo = isInt(7);

  //rq 9
  const sumPrice = (listProduct: Product[]) => {
    return listProduct.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const filterProduct = (listProduct: Product[]) => {
    let arr = listProduct.filter((el: Product) => el.price > 100);
    return arr;
  };
  const mapProduct = (listProduct: Product[]) => {
    let arr: string[] = [];
    listProduct.map((el: Product) =>
      arr.push(
        `Sản phẩm ${el.name} có giá ${el.price} đồng và còn ${el.quantity} sản phẩm`
      )
    );
    return arr;
  };
  const countProduct = (listProduct: Product[]) => {
    let countPr = listProduct.reduce(
      (count, product) => (product.price < 100 ? count + 1 : count),
      0
    );
    return countPr
  };
  return <div>request</div>;
}
