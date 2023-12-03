import { getCounterValue } from "../store/reducers/selectors/getCounterValue/getCounterValue";

describe("getCounterValue test", () => {
  test("empty counter", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("filled counter", () => {
    expect(getCounterValue({ counter: { value: 10 } })).toBe(10);
  });
});
