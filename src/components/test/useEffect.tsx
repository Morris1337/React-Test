import React, { FC, useEffect, useState } from "react";


const SkillTestComponent: FC = () => {
  const [index, setIndex] = useState(0)
  const [user, setUser] = useState({})
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchGames = async () => {
      await fetch("https://www.fighters-inc.com/cdn/shop/products/4866_300x.jpg?v=1570195359")
      .then((response) => response.json())
      .then((data) => setUser(data));
    }

    fetchGames()

    return () => {
      setUser({})
    }
  }, [])

  useEffect(() => {
    setIndex((prev) => {
      return prev + 1;
    })
  }, [games])

  useEffect(() => {
    setIndex((prev) => {
      return prev + 10;
    })
  }, [user])

    return (
    <p>Index is: {index}</p>
    );
};
      export default SkillTestComponent