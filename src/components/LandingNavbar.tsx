import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import { Button } from "./ui/button";

export default function LandingNavbar({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn(className, 'absolute', 'w-full', 'h-12', 'flex', 'items-center')}>
      <Container>
        <div className={cn('w-full', 'flex', 'justify-between', 'items-center')}>
          <Button className="px-0 text-[#FFFFFF]" variant="link">LetMeInUBC</Button>
          <div className={cn('flex', 'justify-between', 'gap-1')}>
            <Button className={cn('text-[#FFFFFF]')} variant="link">Log in</Button>
            <Button variant="outline">Sign up</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
