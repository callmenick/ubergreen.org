import React, { Fragment } from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import PageContent, {
  Heading,
  Paragraph,
  Image,
} from 'components/PageContent/PageContent';

function AboutPage() {
  return (
    <Fragment>
      <PageHeader appearance="secondary" title="About us" />
      <PageContent>
        <Paragraph>
          At Ubergreen Organics, we’re passionate about cacao – specifically, we
          love sharing True Triniatario cacao with the world. Our
          organic-certified Fine or Flavor True Trinitario Cacao Beans keep
          everyone smiling, from consumers who taste the final product, to the
          farmers, chocolate makers and chocolatiers who work with us. We source
          only True Trinitario cacao beans from the land of its birth, Trinidad
          & Tobago.
        </Paragraph>
        <Image src="/img/about/flowers.jpg" alt="bean" start={2} end={7} />
        <Image src="/img/about/pods.jpg" alt="bean" start={7} end={-2} />
        <Paragraph>
          Our mission is to consistently source and supply the highest quality
          certified organic cacao beans in the Trinidad & Tobago to the finest
          chocolate makers in the world. But we go beyond just the promise of
          taste and quality. Through blockchain technology, we’ve eliminated
          potential blind spots along our supply chain, adding details about the
          origin and every aspect of our carefully selected cacao beans’ journey
          from farm to chocolate.
        </Paragraph>
        <Heading>
          Ubergreen and True Trinitario Cacao Beans… What’s all the hype about?
        </Heading>
        <Paragraph>
          In the 1800s, Trinidad & Tobago was the 3rd biggest cacao producer in
          the world. The fruity, nutty and sometimes floral flavours were highly
          revered by chocolatiers worldwide. However, social and economic
          factors dealt a severe blow to our cacao industry, and cacao farming
          in Trinidad & Tobago significantly declined from the mid-1900s
          onwards.
        </Paragraph>
        <Paragraph>
          During the 1930s, research conducted at the Imperial College of
          Tropical Agriculture (ICTA) yielded increasingly disease-tolerant
          varieties. From that research, the Imperial College Selection (ICS)
          varietals were born. These True Trinitario varieties preserved the
          unique and globally sought-after flavours of the True Trinitario cacao
          bean, and these beans are still, several decades later, grown on our
          partner estates.
        </Paragraph>
        <Paragraph>
          The original Trinitario varieties were distributed across the
          Caribbean and beyond, to be grown in the rich soils of colonies in the
          British Empire. Nowadays, several countries and companies produce and
          trade Trinitario Cacao. There are only a rare few, though, that can
          supply the certified organic True Trinitario Fine or Flavor Cacao from
          Trinidad & Tobago.
        </Paragraph>
        <Paragraph>
          In order to celebrate the rebirth of a legend, the Ubergreen team has
          been working with the producers and key cacao stakeholders in Trinidad
          & Tobago. We assist farmers to preserve the unique potential of their
          beans. We also ensure compliance with the organic certifications,
          which is a core building block of our mission of sourcing only
          sustainably grown cacao beans. We also ensure consistent quality
          through pre and post-harvest estate training that ensures our cacao
          meets and exceeds the highest quality standards. We are diligently
          working to increase yield by rejuvenating our partner estates with the
          ancient genetic material, so the world can taste the history that we
          have been able to preserve.
        </Paragraph>
        <Image
          src="/img/about/beans-drying.jpg"
          alt="bean"
          start={2}
          end={-2}
        />
        <Heading>Gran Couva</Heading>
        <Paragraph>
          Our geographic focus is on the Gran Couva region in Trinidad. The
          “chocolate soil” and microclimate creates the ideal conditions for
          cultivating the highest-quality cacao beans in the world. The
          relationship between Gran Couva and chocolate can be compared to that
          of the Champagne region and sparkling white wine – a perfectly
          harmonious gift from nature. Its beans have already won the
          International Cacao Awards 3 times, and are very well known for their
          unique flavours.
        </Paragraph>
        <Image src="/img/about/forest.jpg" alt="bean" start={2} end={7} />
        <Image
          src="/img/about/small-flower.jpg"
          alt="bean"
          start={7}
          end={-2}
        />
        <Heading>San Antonio Estate</Heading>
        <Paragraph>
          Richard DeVerteuil represents the 3rd generation of the family taking
          care of the 110 acres of land, 75 of which are cultivated with True
          Trinitario varieties as old as 70 years. The exquisite taste of the
          San Antonio True Trinitario beans is compounded by the variety of
          other fruit trees and crops planted on the estate. While large parts
          of the fine or flavour cacao industry used agrochemicals in order to
          increase yields, Richard has been “organically organic” for more than
          20 years at the helm of the estate. He himself, a former “oil man”, is
          a cancer survivor and he knows what chemicals can do to the body. He
          took a stance against chemicals long before it was en vogue. At the
          San Antonio Estate, innovation is a built-in feature as Richard and
          his Team constantly focus on improvements through education on newest
          farming practices, post-harvest improvement and general quality
          standards. You simply can not beat the results of somebody doing what
          he or she loves.
        </Paragraph>
        <Heading>
          Highest quality through standardized post-harvest practices
        </Heading>
        <Paragraph>
          Our cacao beans follow a strict quality protocol, which has been
          developed by The University of the West Indies Cocoa Research Center
          and received the local Quality Certificate. Our beans are fermented in
          untreated cedar-wood boxes and turned in regular, standardized
          intervals in order to ensure ideal flavour development. Subsequently,
          the beans are sun-dried on cedar boards under controlled conditions to
          avoid the development of fungus and off-flavours. We store all of our
          fermented and dried beans (between 6-7% moisture content) in GrainPro
          bags and ensure they are tamper-proof. All these aspects preserve the
          unique flavours and guarantee that our clients received the highest
          possible, organic certified cacao beans from the twin isle Republic.
          Our flavour profile is based in predominantly brown and red fruit
          flavours, as well as sometimes spicy and floral notes.
        </Paragraph>
        <Paragraph>
          In order to keep our quality and transparency promise we regularly
          conduct laboratory tests to inspect the microbiological and nutrient
          composition of our beans. These independently verified results are
          available to our clients on request. Furthermore, we use the IBM Food
          Trust powered Blockchain technology to provide full transparency along
          the value chain for each batch produced on our partner farms. As such,
          we eliminate any blind spots in the quality and journey of our beans.
          Whatever the production and transparency requirements, we will meet
          your standard.
        </Paragraph>
        <Paragraph>
          Our beans are low in cadmium, which is important for our customers
          around the world. The low cadmium level in the soils of Gran Couva
          ensures that our beans are meeting the stringent cadmium level
          requirements in all jurisdictions.
        </Paragraph>
      </PageContent>
    </Fragment>
  );
}

export default AboutPage;
