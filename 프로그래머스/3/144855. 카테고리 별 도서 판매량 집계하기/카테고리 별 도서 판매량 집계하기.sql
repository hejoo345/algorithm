SELECT B.CATEGORY, SUM(S.SALES) TOTAL_SALES
FROM BOOK B, BOOK_SALES S
WHERE B.BOOK_ID = S.BOOK_ID
AND DATE_FORMAT(S.SALES_DATE, '%Y-%m') = '2022-01'
GROUP BY B.CATEGORY
ORDER BY B.CATEGORY