<script>
export default {
  name: "overview",
};
</script>

<template>
  <div class="container">
    <div class="contDesc">
      <h1>Course Description</h1>
      <p>
        Now more than ever, corporations are investing heavily in IT. The
        quality of these investments affects the daily work of millions.
      </p>
      <p>
        Yet it's not uncommon to see industry surveys where the failure rates
        for IT projects is over 50%. It's possible to do better and it's
        possible to do so consistently. Use the Business Model Canvas to focus
        your company strategy and facilitate buy-in from stakeholders.
      </p>
      <div class="video-container">
        <iframe
          width="770"
          height="434"
          src="https://www.youtube.com/embed/m-X1ExlQ9uE"
          title="Drive Digital Transformation With Platform Strategies | Info-Tech Analyst Perspective"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        In this two-week course, we'll step through major challenges whitin
        corporate IT and how to address them with the disciplined use of design
        thinking, Lean Startup, and agile ad a team freamwork.
      </p>
      <h1>A Short Description</h1>
      <p>
        A customer-centric way of doing business is a way that provides a
        positive customer experience before and after the sale in order to drive
        repeat business, enhance customer loyalty and improve business growth.
      </p>
      <p>
        But, a customer-centric company is more than a company that offers good
        service. Both Amazon and Zappos are prime examples of brands that are
        customer-centric and have spent years creating a culture around the
        customer and their needs. Their commitment to delivering customer value
        is genuine – In fact, Zappos is happy to fire employees if they do not
        fit within their customer-centric culture!
      </p>
      <p>
        But, how important is being customer-centric? The good news is that’s
        becoming very important! Econsultancy recently asked what the most
        important characteristic is in order to establish a truly
        “digital-native” culture. The answer to that question and leading the
        responses with 58% was to be customer-centric.
      </p>
      <p>Enroll in this course to find out.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/partials/_variables.scss";

h1 {
  color: $seondary-page-text;
}

p {
  margin: 20px 0;
  font-weight: 300;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: black;
  border-radius: 5px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
