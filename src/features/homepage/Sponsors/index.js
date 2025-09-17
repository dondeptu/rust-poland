import { Section } from "../../../common/Section";
import { Box, Company } from "./styled";

export const Sponsors = () => (
    <Section
        header={"Sponsors"}
        content={
            <Box>
                <Company>Company</Company>
                <Company>Company</Company>
                <Company>Company</Company>
                <Company>Company</Company>
            </Box>
        }
    />
);