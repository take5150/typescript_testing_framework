import { ShoppingList } from "./practice";

describe("ShoppingList class method work corrently", () => {
  it("addItem func can add element to list", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("test");
    expect(shoppingList.list).toEqual(["test"]);
  });

  it("removeItem func can delete element from list", () => {
    const shoppingList = new ShoppingList();
    shoppingList.addItem("test");
    shoppingList.removeItem("test");
    // expect(shoppingList.list).toEqual([]);
    expect(shoppingList.list).not.toContain("test");
  });

  it("removeItem func throw exception if list is empty", () => {
    const shoppingList = new ShoppingList();
    expect(() => shoppingList.removeItem("test")).toThrow(
      "アイテム: test は存在しません"
    );
  });
});
