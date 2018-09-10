import React from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image";
import { Link as Scroll } from 'react-scroll'

import Layout from '../components/layout'


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
      slideIndex: 0,
      dimensions: (window.innerWidth/4)-2
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.setActiveSlide = this.setActiveSlide.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.onresize = this.resize;
  }

  resize() {
    this.setState({ dimensions: (window.innerWidth/4)-2 });
  }

  openModal(categoryIndex, imageIndex) {
    this.setState({
      activeCategory: categoryIndex,
      slideIndex: imageIndex
    });
  }

  closeModal() {
    this.setState({
      activeCategory: null,
      slideIndex: 0
    });
  }

  nextSlide(reelLength) {
    const { slideIndex } = this.state;
    let newSlideIndex;

    if (slideIndex >= reelLength - 1) {
      newSlideIndex = 0;
    } else {
      newSlideIndex = slideIndex + 1;
    }
    this.setState({ slideIndex: newSlideIndex })
  }

  prevSlide(reelLength) {
    const { slideIndex } = this.state;
    let newSlideIndex;

    if (slideIndex === 0) {
      newSlideIndex = reelLength - 1;
    } else {
      newSlideIndex = slideIndex + 1;
    }
    this.setState({ slideIndex: slideIndex + 1 })
  }

  setActiveSlide(imageIndex) {
    this.setState({ slideIndex: imageIndex })
  }


  render() {
    const { activeCategory, slideIndex, dimensions } = this.state;
    const { data } = this.props;

    console.log(data);

    const categories = [
      {
        name: 'Lagoon 420',
        images: data.exteriorImages.edges
      },
      {
        name: 'Kitchen/Dining',
        images: data.kitchenImages.edges
      },
      {
        name: 'Navigation Area',
        images: data.navImages.edges
      },
      {
        name: 'Living Quarters',
        images: data.interiorImages.edges
      },
    ];

    // const ratio = (window.innerWidth/4);


    return (
      <Layout>
        <div>
          <Img imgStyle={{ objectFit: 'cover', zIndex: -1 }} fluid={data.heroImage.fluid} />

          {!activeCategory &&
            <Scroll
              className="scroll-down icon-arrow-left"
              to="content"
              data-offset="-45"
              spy
              smooth
              duration={500}
            >
              <span className="hidden">Scroll Down</span>
            </Scroll>
          }


        </div>

        <Link to="/contact/">Contact</Link>

        <div id="content">
          {categories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h2 style={{ textAlign: 'center' }}>{category.name}</h2>
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

                {category.images.map((image, imageIndex) => (
                  <div style={{padding: 8, width: dimensions, height: dimensions, overflow: 'hidden' /* padding: 8, flexBasis: '25%', maxWidth: '25%' */}} onClick={() => this.openModal(categoryIndex, imageIndex)}>
                    <Img style={{width: dimensions, height: dimensions}}fluid={image.node.childImageSharp.fluid} className="hover-shadow cursor" />
                  </div>
                ))}
              </div>

              <div className="modal"
                style={activeCategory === categoryIndex ? { display: 'block' } : { display: 'none' }}
              >
                <span className="close cursor" onClick={this.closeModal} >×</span>
                <div className="modal-content">

                  {category.images.map((image, imageIndex) => (
                    <div className={image.node.childImageSharp.fluid.aspectRatio > 1 ? "landscapeSlide" : "portraitSlide"}
                      style={slideIndex === imageIndex ? { display: 'block' } : { display: 'none' }}>
                      <div className="numbertext">{`${imageIndex} / ${category.images.length}`}</div>
                      <Img
                        fluid={image.node.childImageSharp.fluid}
                        // sizes={{...node.image.sizes, aspectRatio: 1}}
                      />
                    </div>
                  ))}

                  <a className="prev" onClick={() => this.prevSlide(category.images.length)}>❮</a>
                  <a className="next" onClick={() => this.nextSlide(category.images.length)}>❯</a>
                  <div className="caption-container">
                    <p id="caption" ></p>
                  </div>

                  {category.images.map((image, imageIndex) => (
                    <div style={{float: 'left', padding: 4}} onClick={() => this.setActiveSlide(imageIndex)}>
                      <Img
                        style={{width: dimensions/2, height: dimensions/2}}
                        fluid={image.node.childImageSharp.fluid}
                        className={slideIndex === imageIndex ? "demo cursor active" : "demo cursor"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </Layout>
    );
  }
}



export default IndexPage


export const query = graphql`
query {

          heroImage: imageSharp(fluid: {originalName: {regex: "/hero.jpg/" } }) {
          id
    fluid(quality: 100) {
          base64
      tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  
  exteriorImages: allFile(filter: {relativePath: {regex: "/exterior/" } }) {
          edges {
        node {
          childImageSharp {
        fluid(
          quality: 100
          ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }
  }

  interiorImages: allFile(filter: {relativePath: {regex: "/interior/" } }) {
          edges {
        node {
          childImageSharp {
        fluid(
          quality: 100
          ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }
  }

  kitchenImages: allFile(filter: {relativePath: {regex: "/kitchen/" } }) {
          edges {
        node {
          childImageSharp {
        fluid(
          quality: 100
          ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }
  }

  navImages: allFile(filter: {relativePath: {regex: "/nav/" } }) {
          edges {
        node {
          childImageSharp {
        fluid(
          quality: 100
          ) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    }
  }

}
`

/* export const query = graphql`
query {
          heroImages: imageSharp(fluid: {originalName: {regex: "/test/" } }) {
          id
    fluid(quality: 100) {
          base64
      tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
` */