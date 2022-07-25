import type { InferGetStaticPropsType, NextPage } from "next";
import Container from "../components/container";
import data from "../data/index.json";
import staticData from "../data/static.json";

export const getStaticProps = () => ({
  props: {
    data,
    staticData,
  },
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <main>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            accusantium doloremque quo reprehenderit voluptatum labore
            reiciendis, nostrum, animi tempore expedita fugit aspernatur sed
            ipsum veniam, placeat magnam sint non iure.
          </p>
        </Container>
      </main>
    </div>
  );
};

export default Home;
