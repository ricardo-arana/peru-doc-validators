import { Dni } from ".";

describe("Validaciones de documentos", () => {
  it("debería devolver true para dni", () => {
    const documento = new Dni('46621500', '2');
    expect(documento.isValid).toBeTruthy();
  });

  // it("debería devolver falso para dni", () => {
  //   expect(isDNI("45534343", "5")).toBeFalsy();
  // });
});
