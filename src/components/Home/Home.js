import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <>
      <ul>
        {alphabet.map((letter) => (
          <li key={letter}>
            <a href={`#${letter}`}>{letter}</a>
          </li>
        ))}
      </ul>
      <h2 id="a">A</h2>
      <h3>
        <Link to="/artist">Alice In Chains</Link>
      </h3>
      <h2 id="b">B</h2>
      <p>This is the section for the letter B.</p>
      <h2 id="c">C</h2>
      <p>This is the section for the letter C.</p>
      <h2 id="d">D</h2>
      <p>This is the section for the letter D.</p>
      <h2 id="e">E</h2>
      <p>This is the section for the letter E.</p>
      <h2 id="f">F</h2>
      <p>This is the section for the letter F.</p>
      <h2 id="g">G</h2>
      <p>This is the section for the letter G.</p>
      <h2 id="h">H</h2>
      <p>This is the section for the letter H.</p>
      <h2 id="i">I</h2>
      <p>This is the section for the letter I.</p>
      <h2 id="j">J</h2>
      <p>This is the section for the letter J.</p>
      <h2 id="k">K</h2>
      <p>This is the section for the letter K.</p>
      <h2 id="l">L</h2>
      <p>This is the section for the letter L.</p>
      <h2 id="m">M</h2>
      <p>This is the section for the letter M.</p>
      <h2 id="n">N</h2>
      <p>This is the section for the letter N.</p>
      <h2 id="o">O</h2>
      <p>This is the section for the letter O.</p>
      <h2 id="p">P</h2>
      <p>This is the section for the letter P.</p>
      <h2 id="q">Q</h2>
      <p>This is the section for the letter Q.</p>
      <h2 id="r">R</h2>
      <p>This is the section for the letter R.</p>
      <h2 id="s">S</h2>
      <p>This is the section for the letter S.</p>
      <h2 id="t">T</h2>
      <p>This is the section for the letter T.</p>
      <h2 id="u">U</h2>
      <p>This is the section for the letter U.</p>
      <h2 id="v">V</h2>
      <p>This is the section for the letter V.</p>
      <h2 id="w">W</h2>
      <p>This is the section for the letter W.</p>
      <h2 id="x">X</h2>
      <p>This is the section for the letter X.</p>
      <h2 id="y">Y</h2>
      <p>This is the section for the letter Y.</p>
      <h2 id="z">Z</h2>
      <p>This is the section for the letter Z.</p>
    </>
  );
};

export default Home;
