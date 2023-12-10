import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../Components/Title";
import { projectData } from "../../db/index.js";
import Arrow from "../../assets/png/arrow.png";
import styles from "./styles.module.scss";

const Portfolio = () => {
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNeighbours] = useState(1);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  // Geçerli sayfadaki öğeleri belirle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectData.slice(indexOfFirstItem, indexOfLastItem);

  // İleri ve Geri Git işlevleri
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Sayfa numarası listesini oluştur
  const getPageNumbers = () => {
    const pageNumbers = [];
    const firstPage = 1;

    // İlk sayfa
    pageNumbers.push(firstPage);

    // Aralık
    if (currentPage > pageNeighbours + 1) {
      pageNumbers.push("...");
    }

    // Ortadaki sayfa numaraları
    for (
      let i = Math.max(firstPage + 1, currentPage - pageNeighbours);
      i <= Math.min(totalPages - 1, currentPage + pageNeighbours);
      i++
    ) {
      pageNumbers.push(i);
    }

    // Aralık
    if (currentPage + pageNeighbours < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Son sayfa
    pageNumbers.push(totalPages);

    return pageNumbers;
  };

  return (
    <div className={styles["c-portfolio"]}>
      <div className={styles["c-portfolio__container"]}>
        <Title title={"Portfolio"} />
        <div className={styles["c-portfolio__row"]}>
          {currentItems.map((item, i) => (
            <Link
              key={i}
              className={styles["c-portfolio__item-container"]}
              to={`/${item.titlelink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={item.id} className={styles["c-portfolio__item"]}>
                <div className={styles["c-portfolio__item-img"]}>
                  <img
                    src={`/Portfolio/img/project/${item.img}`}
                    alt="html"
                    title={item.title}
                    loading="lazy"
                  />
                  <div className={styles["c-portfolio__item-overlay"]}>
                    <div className={styles["c-portfolio__item-overlay-info"]}>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles["c-portfolio__pagination-area"]}>
          <div className={styles["c-pagination"]}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <img src={Arrow} alt="Github" loading="lazy" />
            </button>
            <div className={styles["c-pagination__container"]}>
              {getPageNumbers().map((number, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(number)}
                  className={number === currentPage ? styles.active : ""}
                  disabled={number === "..."}
                >
                  <span>{number}</span>
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img src={Arrow} alt="Github" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Portfolio);
