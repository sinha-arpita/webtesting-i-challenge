const enhancer = require("./enhancer.js");
// test away!
describe("Item repair/fail/succes/get", () => {
  describe(" repair for full durability", () => {
    //arrange
    const item1 = {
      name: "sword",
      enhancement: 7,
      durability: 54
    };
    it("Repair durability", () => {
      expect(enhancer.repair(item1).durability).toEqual(100);
      expect(enhancer.fail(item1).durability).toBe(95);
    });
  });
  describe("enhancement fail", () => {
    const item2 = {
      name: "arrow",
      enhancement: 15,
      durability: 54
    };
    it("Fail the item", () => {
      expect(enhancer.fail(item2).durability).toBe(44);
    });
  });
  describe("enhancement success", () => {
    const item3 = {
      name: "bracelet",
      enhancement: 18,
      durability: 74
    };
    it("Succeed the item", () => {
      expect(enhancer.fail(item3).enhancement).toBe(17);
      expect(enhancer.succeed(item3).enhancement).toBe(18);
    });
  });
  describe("enhancement has name impact", () => {
    const item1 = {
      name: "sword",
      enhancement: 7,
      durability: 54
    };
    it("Change name", () => {
      expect(enhancer.get(item1).name).toEqual("[+7]sword");
    });
  });
});
