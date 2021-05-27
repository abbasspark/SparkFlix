import React from "react";
import { FooterItems } from "../../SiteData";

export default function Footer() {
  return (
    <footer>
      <div class="top">
        <div class="container">
          <div class="about">
            <div>
              <div class="logo"></div>
              <div class="desc">
                <p dangerouslySetInnerHTML={{ __html: FooterItems.desc }}></p>
                <p>
                  <a href="https://twitter.com/fmoviesdotto" target="_blank">
                    <i class="fab fa-twitter"></i> Connect with us on twitter
                  </a>
                </p>
                <p class="small font-italic">{FooterItems.warning}</p>
              </div>
            </div>
          </div>
          <div class="links">
            <div class="bl">
              <div class="heading">Links</div>
              <ul>
                {FooterItems.links.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="bl">
              <div class="heading"></div>
              <ul>
                {FooterItems.externalLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} title={item.name} target="_blank">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="bl">
              <div class="heading"></div>
              <ul>
                <li>
                  <a href={FooterItems.contact.link} title="Contact us">
                    {FooterItems.contact.name}
                  </a>
                </li>
                <li>
                  <a href={FooterItems.request.link} data-toggle="modal" data-target="#md-request">
                    {FooterItems.request.name}
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </footer>
  );
}
