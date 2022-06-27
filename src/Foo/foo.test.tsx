import { render, screen } from "@/testUtils";
import { Foo } from "./foo";

test("simple render", () => {
  render(<Foo />);

  expect(screen.getByText("Hello")).toBeInTheDocument();
});
