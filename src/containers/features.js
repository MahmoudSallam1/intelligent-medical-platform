import React from "react";
import Features from "../components/features";

export default function FeaturesContainer({ children }) {
  return (
    <Features>
      <Features.Title>Our Features</Features.Title>
      <Features.Row>
        <Features.Column>
          <Features.Icon src="/images/icons/prescription.png" />
          <Features.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Features.Text>
        </Features.Column>
        <Features.Column>
          <Features.Icon src="/images/icons/ocr.png" />
          <Features.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. 
          </Features.Text>
        </Features.Column>
        <Features.Column>
          <Features.Icon src="/images/icons/analytics.png" />
          <Features.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Features.Text>
        </Features.Column>
      </Features.Row>
    </Features>
  );
}
