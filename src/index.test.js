import isDNI from "./index";

describe("Validaciones de documentos", () => {
  it("debería devolver true para dni", () => {
    expect(isDNI("46621500", "2")).toBeTruthy();
  });

  it("debería devolver falso para dni", () => {
    expect(isDNI("45534343", "5")).toBeFalsy();
  });
});
