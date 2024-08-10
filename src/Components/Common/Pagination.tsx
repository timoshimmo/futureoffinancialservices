import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const Pagination = ({ data, currentPage, setCurrentPage, perPageData }: any) => {


    const handleClick = (e: any) => {
        setCurrentPage(e);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / perPageData); i++) {
        pageNumbers.push(i);
    }
    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };
    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [pageNumbers.length, currentPage, setCurrentPage])
    return (
        <React.Fragment>
            <Row className="g-0 justify-content-center mb-4">
                <Col lg={12}>
                    <ul className="pagination-block pagination pagination-separated justify-content-between mb-sm-0">
                        {currentPage <= 1 ? (
                            <Link className="page-item pagination-prev disabled" to="#!">
                                Previous
                            </Link>
                        ) :
                            <li className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
                                <Link to="#!" className="page-link" onClick={handleprevPage}>Previous</Link>
                            </li>
                        }
                        <div className="d-flex gap-2 align-items-center">
                            {pageNumbers.map((item, key) => (
                                <React.Fragment key={key}>
                                    <li className="page-item">
                                        <Link to="#!" className={currentPage === item ? "page-link active" : "page-link"} onClick={() => handleClick(item)}>{item}</Link>
                                    </li>
                                </React.Fragment>
                            ))}
                        </div>
                        
                        {currentPage >= pageNumbers.length ? (
                            <Link className="page-item pagination-next disabled" to="#!">
                                Next
                            </Link>
                        ) :
                            <li className={currentPage >= pageNumbers.length ? "page-item disabled" : "page-item"}>
                                <Link to="#!" className="page-link" onClick={handlenextPage}>Next</Link>
                            </li>
                        }
                    </ul>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Pagination;
