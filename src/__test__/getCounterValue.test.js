import { getCounterValue } from "../store/reducers/selectors/getCounterValue/getCounterValue";

describe("getCounterValue", () => {
  test("work with empty state", () => {
    expect(getCounterValue({})).toBe(0);
    expect(getCounterValue({})).not.toBe(undefined);
    expect(getCounterValue({})).not.toBe(null);
  });
});
