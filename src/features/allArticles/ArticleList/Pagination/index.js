import { Nav, NextArrow, PageButton, PaginationButton, PrevArrow, Separator } from "./styled";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
    const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);

    const getPageItems = () => {
        if (currentPage >= totalPages - 2) {
            return [totalPages - 2, totalPages - 1, totalPages].filter(n => n > 0);
        }

        return [currentPage, currentPage + 1, "...", totalPages];
    };

    return (
        <Nav aria-label="Pagination">
            <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
                <PrevArrow />
            </PaginationButton>

            {getPageItems().map((item, idx) =>
                item === "..." ? (
                    <Separator key={idx}>...</Separator>
                ) : (
                    <PageButton
                        key={idx}
                        active={item === currentPage}
                        onClick={() => onPageChange(item)}
                    >
                        {item}
                    </PageButton>
                )
            )}

            <PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
                <NextArrow />
            </PaginationButton>
        </Nav>
    );
};