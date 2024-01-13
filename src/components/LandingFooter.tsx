import Container from "./ui/Container";
import { Button } from "./ui/button";

export default function LandingFooter() {
  return (
    <Container
      className="py-12 border-t-[1px] flex flex-col items-center"
    >
      <Button className="px-0 text-xl" variant="link">LetMeInUBC</Button>
      <p className="text-sm text-gray-400">Copyright © LetMeInUBC</p>
      <p className="pt-4">Built by UBC students, free for everyone. ❤️</p>
    </Container>
  );
}
