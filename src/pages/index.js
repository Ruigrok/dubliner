import React from 'react';
import { graphql, navigate, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Link as Scroll } from 'react-scroll';

import Layout from '../components/layout';


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
      slideIndex: 0,
      dimensions: 0,
      tableLength: 0
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

    let tableLength;
    window.innerWidth >= 700 ? tableLength = 6 : tableLength = 3;

    this.setState({
      dimensions: (window.innerWidth / 4) - 2,
      tableLength: tableLength
    });
  }

  resize() {
    let tableLength;

    window.innerWidth >= 700 ? tableLength = 6 : tableLength = 3;

    this.setState({
      dimensions: (window.innerWidth / 4) - 2,
      tableLength: tableLength
    });
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
      newSlideIndex = slideIndex - 1;
    }
    this.setState({ slideIndex: newSlideIndex })
  }

  setActiveSlide(imageIndex) {
    this.setState({ slideIndex: imageIndex })
  }


  render() {
    const { activeCategory, slideIndex, dimensions, tableLength } = this.state;
    const { data } = this.props;

    const categories = [
      {
        name: 'Exterior Views',
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


    const info = [
      {
        header: 'Year',
        data: '2007'
      },
      {
        header: 'Location',
        data: 'Grenadines'
      },
      {
        header: 'Price',
        data: '$365,000'
      },
      {
        header: 'Length',
        data: "42'"
      },
      {
        header: 'Beam',
        data: "24.6'"
      },
      {
        header: 'Draft',
        data: "4.3'"
      },
      {
        header: 'Material',
        data: 'Fiberglass'
      },
      {
        header: 'Hull',
        data: 'Catamaran'
      },
      {
        header: 'Type',
        data: 'Cruiser'
      },
      {
        header: 'Rigging',
        data: 'Masthead sloop'
      },
      {
        header: 'Cabins',
        data: 3
      },
      {
        header: 'Condition',
        data: 'Excellent'
      },
    ];


    return (
      <Layout /* location={this.props.location} */>
        <div
          style={{
            marginBottom: '1.45rem',
            background: 'rgba(255, 255, 255, 0.5)',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1
          }}
        >
          <div
            style={{
              margin: '0 auto',
              padding: '1.45rem 1.0875rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Lagoon 420
              </Link>
            </h1>

            <div className='btn-container'>
              <button
                className='btn nav-btn'
                onClick={() => navigate('/contact/')}
              >
                Contact
            </button>
            </div>
          </div>
        </div>

        <div>
          <Img imgStyle={{ objectFit: 'cover', zIndex: -1 }} fluid={data.heroImage.fluid} />

          {!activeCategory &&
            <Scroll
              className="scroll-down icon-arrow-left"
              to="content"
              data-offset="-45"
              offset={-126}
              spy
              smooth
              duration={500}
            >
              <span className="hidden">Scroll Down</span>
            </Scroll>
          }
        </div>

        <div id="content">
          <h2 style={{ textAlign: 'center', marginTop: '1.45rem' }}>Lagoon 420</h2>

          <div style={{ margin: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ minWidth: 100, maxWidth: 300 }}>
              <h4>Overview:</h4>
              <ul>
                <li>Converted from hybrid in 2010</li>
                <li>Owners Version</li>
                <li>Fully Blue Water Equipped</li>
                <li>Two Yanmar 40 hp diesels 1520 hrs approx each</li>
                <li>SD 50 Saildrives</li>
                <li>Three Cabins</li>
                <li>Three Electric Flush Toilets</li>
              </ul>
            </div>
            <div style={{ minWidth: 100, maxWidth: 300 }}>
              <h4>Features:</h4>
              <ul>
                <li>750 watts of solar panels, Wind generator</li>
                <li>EPIRB</li>
                <li>Offshore life raft,</li>
                <li>Onan Generator</li>
                <li>Invertor</li>
                <li>Four electric winches</li>
                <li>Raymarine chart plotter with integrated radar and AIS</li>
                <li>Four AC Units</li>
                <li>Achilles Dinghy & 20hp electric start Honda Motor</li>
              </ul>
            </div>
            <div style={{ minWidth: 100, maxWidth: 300 }}>
              <h4>2018 Upgrades:</h4>
              <ul>
                <li>New Windlass & Anchor Chain</li>
                <li>Four 200 amp Gel House Batterys</li>
                <li>Mastervolt Battery Charger</li>
                <li>Lots of tools and spare parts, pots, pans, dishes, and linens</li>
              </ul>
            </div>
          </div>




          <div style={{ margin: 10 }}>

            {tableLength === 6 &&
              <React.Fragment>
                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(0, tableLength).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(0, tableLength).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(tableLength).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(tableLength).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            }

            {tableLength === 3 &&
              <React.Fragment>
                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(0, 3).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(0, 3).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(3, 6).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(3, 6).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(6, 9).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(6, 9).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <table className='info-table'>
                  <tbody>
                    <tr>
                      {info.slice(9).map((item, itemIndex) => (
                        <th>{item.header}</th>
                      ))}
                    </tr>
                    <tr>
                      {info.slice(9).map((item, itemIndex) => (
                        <td>{item.data}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            }
          </div>


          {categories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h2 style={{ textAlign: 'center', marginTop: '1.45rem' }}>{category.name}</h2>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {category.images.map((image, imageIndex) => (
                  <div style={{ padding: 8, width: dimensions, height: dimensions, overflow: 'hidden' /* padding: 8, flexBasis: '25%', maxWidth: '25%' */ }} onClick={() => this.openModal(categoryIndex, imageIndex)}>
                    <Img style={{ width: dimensions, height: dimensions }} fluid={image.node.childImageSharp.fluid} className="hover-shadow cursor" />
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
                      <Img fluid={image.node.childImageSharp.fluid} />
                    </div>
                  ))}

                  <a className="prev" onClick={() => this.prevSlide(category.images.length)}>❮</a>
                  <a className="next" onClick={() => this.nextSlide(category.images.length)}>❯</a>
                  <div className="caption-container">
                    <p id="caption" ></p>
                  </div>

                  {category.images.map((image, imageIndex) => (
                    <div style={{ float: 'left', padding: 4 }} onClick={() => this.setActiveSlide(imageIndex)}>
                      <Img
                        style={{ width: dimensions / 2, height: dimensions / 2 }}
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
      </Layout >
    );
  }
}

export default IndexPage;


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