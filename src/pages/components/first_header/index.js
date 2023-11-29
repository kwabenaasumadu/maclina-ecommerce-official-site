import React, { useState } from "react";
import styles from "../../../styles/first_header.module.css";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import MenuIcon from "@mui/icons-material/Menu";

function Index() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function openMobileNavLinks() {
    setIsMobileOpen(true);
  }

  function closeMobileNavLinks() {
    setIsMobileOpen(false);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.navigationContainer}>
            <div className={styles.navLink}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/" className={styles.link}>
                About
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/" className={styles.link}>
                Contact
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/" className={styles.link}>
                Categories
              </Link>
            </div>

            <div className={styles.navLink}>
              <Link href="/" className={styles.link}>
                Shop more
              </Link>
            </div>
          </div>

          <div className={styles.companyContainer}>
            <div className={styles.firstName}>
              <h1>Maclina</h1>
            </div>

            <div className={styles.secondName}>
              <p>Store</p>
            </div>
          </div>

          <div className={styles.userStaffContainer}>
            <div className={styles._1}>
              <SearchIcon />
            </div>

            <div className={styles._2}>
              <p>0.00</p>

              <ShoppingCartCheckout />
            </div>

            <div className={styles._3}>
              <p>Log In</p>
            </div>
          </div>

          <div
            className={styles.mobileNavigationContainer}
            onClick={isMobileOpen ? closeMobileNavLinks : openMobileNavLinks}
          >
            <MenuIcon className={styles.MenuIcon} />
          </div>

          {isMobileOpen && (
            <div
              className={`${styles.mobileNavigationLinks} ${
                isMobileOpen ? "active" : ""
              }`}
            >
              <div className={styles.link}>
                <Link
                  href="/"
                  className={styles.eachLink}
                  onClick={closeMobileNavLinks}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className={styles.eachLink}
                  onClick={closeMobileNavLinks}
                >
                  About
                </Link>
                <Link
                  href="/shoe_categories/"
                  className={styles.eachLink}
                  onClick={closeMobileNavLinks}
                >
                  Categories
                </Link>
                <Link
                  href="/"
                  className={styles.eachLink}
                  onClick={closeMobileNavLinks}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
