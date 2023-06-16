import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
  <b>
    <font size={+2}>
      Before you read, here's some carefully selected music to listen to while
      you're here.{" "}
    </font>
  </b>
  {/* <figure>
		<figcaption></figcaption>
		<audio src="music\Eliza Rose - Baddest Of Them All.mp3" controls>
			<p>If you are reading this, it is because your browser does not support the audio element.</p>
		</audio>
	</figure> */}
  <table>
    <tbody>
      <tr>
        <td>
          {" "}
          <figure>
            <figcaption />
            <audio
              id="player"
              src="music\Local Forecast - Elevator.mp3"
              controls=""
            >
              <p>
                If you are reading this, it is because your browser does not
                support the audio element.
              </p>
            </audio>
          </figure>{" "}
        </td>
        <td>
          {" "}
          <figure>
            <figcaption />
            <audio
              id="player"
              src="music\Game of Thrones (HBO) Intro.mp3"
              controls=""
            >
              <p>
                If you are reading this, it is because your browser does not
                support the audio element.
              </p>
            </audio>
          </figure>{" "}
        </td>
        <td>
          {" "}
          <figure>
            <figcaption />
            <audio
              id="player"
              src="music\Queen - Don't Stop Me Now (Official Video).mp3"
              controls=""
            >
              <p>
                If you are reading this, it is because your browser does not
                support the audio element.
              </p>
            </audio>
          </figure>{" "}
        </td>
        <td>
          {" "}
          <figure>
            <figcaption />
            <audio
              id="player"
              src="music\Eliza Rose - Baddest Of Them All.mp3"
              controls=""
            >
              <p>
                If you are reading this, it is because your browser does not
                support the audio element.
              </p>
            </audio>
          </figure>{" "}
        </td>
        <td>
          {" "}
          <figure>
            <figcaption />
            <audio id="player" src="music\FJAAK - District 8.mp3" controls="">
              <p>
                If you are reading this, it is because your browser does not
                support the audio element.
              </p>
            </audio>
          </figure>{" "}
        </td>
      </tr>
    </tbody>
  </table>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif',
      border: "none",
      borderBottom: "solid black 1.0pt",
      padding: "0cm 0cm 1.0pt 0cm"
    }}
  >
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 24, fontFamily: '"Times New Roman",serif' }}>
          EDSON LI
        </span>
      </strong>
    </p>
  </div>
  <table
    style={{
      borderCollapse: "collapse",
      border: "none",
      marginRight: "calc(2%)",
      width: "98%"
    }}
  >
    <tbody>
      <tr>
        <td
          style={{
            width: "52.7846%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Mobile:&nbsp;
              </span>
            </strong>
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              0403 448 823&nbsp;
            </span>
          </p>
        </td>
        <td
          style={{
            width: "47.0616%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Address:&nbsp;
              </span>
            </strong>
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              Balaclava, Melbourne VIC
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "52.7846%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Email:&nbsp;
              </span>
            </strong>
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              edsonli1999@gmail.com (preferred)
            </span>
          </p>
        </td>
        <td
          style={{
            width: "47.0616%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Link:&nbsp;
              </span>
            </strong>
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              https://github.com/edsonli1999
            </span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      &nbsp;
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      A fresh university graduate with a hardworking and meticulous work ethic,
      keen on experiencing new and challenging environments. Software experience
      includes working with a team of programmers and web design students to
      develop a share house utility scheduling web application, using
      technologies such as Next.js, Firebase, and Confluence. Currently, I have
      an interest in web development, with other interests including artificial
      intelligence and cyber security. Extensive experience functioning in a
      high-pressure environment, with 2 years of being a sergeant in the
      Singapore army. My favourite programming languages are java and python.
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: ".15pt",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      &nbsp;
    </span>
  </p>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif',
      border: "none",
      borderBottom: "solid black 1.0pt",
      padding: "0cm 0cm 1.0pt 0cm"
    }}
  >
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          SKILLS and QUALIFICATIONS
        </span>
      </strong>
    </p>
  </div>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        Software:&nbsp;
      </span>
    </strong>
  </p>
  <ul>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Data structures and algorithms (C, Python, Java, Haskell)&nbsp;
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Database (mySQL, noSQL) and modelling (draw.io)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Object oriented development and design (Java, UML Models, Design
        Patterns)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Artificial Intelligence (Python, Java)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Scripting and automation (batch files, python, selenium)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Web Development (HTML, JavaScript, CSS, C#, TypeScript, React.js,
        Firebase, .NET, github actions, CI/CD)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
      >
        Collaboration using an Agile framework + documentation (Confluence,
        jira, slack, discord)
      </span>
    </li>
  </ul>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        Language:
      </span>
    </strong>
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      &nbsp;English(Fluent), Mandarin(Conversational), Cantonese(Conversational)
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        Interests:&nbsp;
      </span>
    </strong>
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      Bouldering, running, cycling
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      &nbsp;
    </span>
  </p>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif',
      border: "none",
      borderBottom: "solid black 1.0pt",
      padding: "0cm 0cm 1.0pt 0cm"
    }}
  >
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          PORTFOLIO
        </span>
      </strong>
    </p>
  </div>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        University of Melbourne (2020 – 2022):&nbsp;
      </span>
    </strong>
  </p>
  <ul>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        Simple HTTP Server&nbsp;
      </span>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        → Sockets (C)
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        Basic Web Application → HTML, CSS, JavaScript
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        Game Playing Agent (Hex) → AI, Heuristics, minimax search
      </span>
    </li>
    <li>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        Share House utility scheduling web app&nbsp;
      </span>
      <span
        style={{ fontFamily: '"Times New Roman", serif', fontSize: "14pt" }}
      >
        → Next.js, Tailwind CSS, Firebase, Github actions, Confluence
      </span>
    </li>
  </ul>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        Others:
      </span>
    </strong>
  </p>
  <ul>
    <li>
      <span style={{ fontFamily: '"Times New Roman",serif', fontSize: 19 }}>
        Basic console .NET app → C#
      </span>
    </li>
    <li>
      <span style={{ fontFamily: '"Times New Roman",serif', fontSize: 19 }}>
        Automated Test scripts for internship → Python Selenium
      </span>
    </li>
  </ul>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif',
      border: "none",
      borderBottom: "solid black 1.0pt",
      padding: "0cm 0cm 1.0pt 0cm"
    }}
  >
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          &nbsp;
        </span>
      </strong>
    </p>
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          WORK EXPERIENCE
        </span>
      </strong>
    </p>
  </div>
  <table
    style={{
      borderCollapse: "collapse",
      border: "none",
      marginRight: "calc(2%)",
      width: "98%"
    }}
  >
    <tbody>
      <tr>
        <td
          style={{
            width: "50.7481%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Toppan Ecquaria
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "49.0981%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              Singapore
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "50.7481%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Software Developer Intern
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "49.0981%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                2022 Dec - 2023 Feb
              </span>
            </em>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <ul style={{ marginBottom: "0cm", listStyleType: "disc" }}>
      <li
        style={{
          marginTop: "0cm",
          marginRight: "0cm",
          marginBottom: "8.0pt",
          marginLeft: "0cm",
          lineHeight: "105%",
          fontSize: 15,
          fontFamily: '"Calibri",sans-serif'
        }}
      >
        <span
          style={{
            fontFamily: '"Times New Roman",serif',
            fontSize: "14.0pt",
            color: "black"
          }}
        >
          Aided with the development of a polling web app used by the Singapore
          Government in an upcoming election, including manual testing, updating
          test datasets, writing scripts for&nbsp;
        </span>
        <span
          style={{ fontFamily: '"Times New Roman",serif', fontSize: "14.0pt" }}
        >
          user acceptance testing
          <span style={{ color: "black" }}>
            , updating database models, and other various administrative tasks.
          </span>
        </span>
      </li>
    </ul>
  </div>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      Skills: Data cleaning (excel, python pandas), scripting (python selenium),
      database modelling (draw.io, AWS)
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
      Reference: Wei Yang (Scrum Master) +65 9029 1959
    </span>
  </p>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "normal",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <strong>
      <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
        &nbsp;
      </span>
    </strong>
  </p>
  <table
    style={{
      borderCollapse: "collapse",
      border: "none",
      marginRight: "calc(2%)",
      width: "98%"
    }}
  >
    <tbody>
      <tr>
        <td
          style={{
            width: "77.8683%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Singapore Armed Forces
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "22.1317%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              Singapore
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "77.8683%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Sergeant, Intel Reconnaissance &nbsp; &nbsp;&nbsp;
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "22.1317%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                2018 – 2020
              </span>
            </em>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "8.0pt",
      marginLeft: "0cm",
      lineHeight: "105%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif',
      border: "none",
      borderBottom: "solid black 1.0pt",
      padding: "0cm 0cm 1.0pt 0cm"
    }}
  >
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          &nbsp;
        </span>
      </strong>
    </p>
    <p
      style={{
        marginTop: "0cm",
        marginRight: "0cm",
        marginBottom: "0cm",
        marginLeft: "0cm",
        lineHeight: "normal",
        fontSize: 15,
        fontFamily: '"Calibri",sans-serif',
        border: "none",
        padding: "0cm"
      }}
    >
      <strong>
        <span style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}>
          EDUCATION
        </span>
      </strong>
    </p>
  </div>
  <table
    style={{
      borderCollapse: "collapse",
      border: "none",
      marginRight: "calc(3%)",
      width: "97%"
    }}
  >
    <tbody>
      <tr>
        <td
          style={{
            width: "74.5474%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                University of Melbourne
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "25.2834%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <span
              style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
            >
              Melbourne, VIC
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "74.5474%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                Bachelor of Science, Computing and Software Systems
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "25.2834%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <em>
              <span
                style={{ fontSize: 19, fontFamily: '"Times New Roman",serif' }}
              >
                2020 - 2022
              </span>
            </em>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <ul>
    <li>
      <span
        style={{
          lineHeight: "96%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        Donovan-Johnston Scholarship - International House
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        COMP30022 - IT Project
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        COMP30023 - Computer Systems
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        COMP30024 - Artificial Intelligence
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        COMP30026 - Models of Computation
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        SWEN30006 - Software Modelling and Design
      </span>
    </li>
    <li>
      <span
        style={{
          lineHeight: "115%",
          fontFamily: '"Times New Roman",serif',
          fontSize: "14.0pt"
        }}
      >
        INFO30005 - Web information technologies
      </span>
    </li>
  </ul>
  <p
    style={{
      marginTop: "0cm",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "115%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span
      style={{
        fontSize: 19,
        lineHeight: "115%",
        fontFamily: '"Times New Roman",serif'
      }}
    >
      &nbsp;
    </span>
  </p>
  <table
    style={{ width: "100.0%", borderCollapse: "collapse", border: "none" }}
  >
    <tbody>
      <tr>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                Meridian Junior College
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <span
              style={{
                fontSize: 19,
                lineHeight: "115%",
                fontFamily: '"Times New Roman",serif'
              }}
            >
              Singapore
            </span>
          </p>
        </td>
        <td
          style={{
            width: "12.46%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                &nbsp;
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                Temasek Secondary School
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <span
              style={{
                fontSize: 19,
                lineHeight: "115%",
                fontFamily: '"Times New Roman",serif'
              }}
            >
              Singapore
            </span>
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                GCE A level
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "1.15pt",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "96%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <em>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "96%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                2016 – 2017
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "12.46%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                &nbsp;
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0cm",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "115%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <em>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "115%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                GCE O level&nbsp;
              </span>
            </em>
          </p>
        </td>
        <td
          style={{
            width: "21.88%",
            padding: "0cm 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "1.15pt",
              marginRight: "0cm",
              marginBottom: "0cm",
              marginLeft: "0cm",
              lineHeight: "96%",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "right"
            }}
          >
            <em>
              <span
                style={{
                  fontSize: 19,
                  lineHeight: "96%",
                  fontFamily: '"Times New Roman",serif'
                }}
              >
                2012 - 2015
              </span>
            </em>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p
    style={{
      marginTop: "1.15pt",
      marginRight: "0cm",
      marginBottom: "0cm",
      marginLeft: "0cm",
      lineHeight: "96%",
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    }}
  >
    <span
      style={{
        fontSize: 19,
        lineHeight: "96%",
        fontFamily: '"Times New Roman",serif'
      }}
    >
      &nbsp;
    </span>
  </p>
</>

  )
}
