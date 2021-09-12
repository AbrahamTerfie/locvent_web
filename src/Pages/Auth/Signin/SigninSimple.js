import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components/";
import { LearnMoreLink } from "../../../Components/";
import { SectionHeader } from "../../../Components/";
import { Section } from "../../../Components/";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SigninSimple = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign in"
            subtitle={
              <span>
                Don’t have an account?{" "}
                <LearnMoreLink
                  color="primary"
                  title="Sign up."
                  href="/register"
                  typographyProps={{ variant: "h6" }}
                />
              </span>
            }
            titleProps={{
              variant: "h3",
            }}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default SigninSimple;
