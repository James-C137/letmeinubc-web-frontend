import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import LandingStepper from "@/components/LandingStepper";
import Container from "@/components/ui/Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="flex min-h-screen flex-col items-center">
        <Container
          className="min-h-[60svh] pt-32 pb-24 bg-[#002145] flex items-center gap-12"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:max-w-[50%] flex flex-col gap-8 items-start">
              <h1 className="scroll-m-20 text-4xl text-[#FFFFFF] font-extrabold tracking-tight lg:text-5xl">
                Track your course openings with LetMeInUBC.
              </h1>
              <Button size="lg" variant="outline">Give it a try</Button>
            </div>
            <div className="max-w-[320px] md:min-w-[320px] h-[300px] p-4 rounded-md bg-[#FFFFFF]">
              Course selection widget
            </div>
          </div>
        </Container>
        <Container
          className="mt-12 py-12"
        >
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            How does it work?
          </h1>
          <LandingStepper />
        </Container>
        <Container
          className="py-12"
        >
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            FAQs
          </h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I get notified?</AccordionTrigger>
              <AccordionContent>Idk</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Poggers?</AccordionTrigger>
              <AccordionContent>Yes</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </main>
      <LandingFooter />
    </>
  )
}
