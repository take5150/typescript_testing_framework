import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockFs = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockFs.get.mockClear();
  });

  it("can user get", async () => {
    const users = [{ name: "take" }, { name: "tk" }];
    const response = { data: users };
    mockFs.get.mockResolvedValue(response);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockFs.get).toHaveBeenCalledWith("/users.json");
  });
});
