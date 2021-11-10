interface LogoProps { mobile: boolean };
const Logo: React.FC<LogoProps> = (props) => {
  const { mobile } = props

  return <svg
    width={mobile ? "175" : "350"}
    height={mobile ? "35" : "70"}
    viewBox="0 0 349.99999999999994 70.71514505120916"
    className="css-1j8o68f">
    <defs id="SvgjsDefs1806">
      <linearGradient id="SvgjsLinearGradient1811">
        <stop id="SvgjsStop1812" stop-color="#A1A1A1" offset="0">
        </stop>
        <stop id="SvgjsStop1813" stop-color="#e6e7e8" offset="0.5">
        </stop>
        <stop id="SvgjsStop1814" stop-color="#A1A1A1" offset="1">
        </stop>
      </linearGradient>
    </defs>
    <g
      id="SvgjsG1807"
      transform="matrix(0.9841412259134763,0,0,0.9841412259134763,0,-10.549992327486104)"
      fill="url(#SvgjsLinearGradient1811)">
      <path
        d="M27.48 26 c1.92 1.4 3.12 3.64 3.12 6.2 c0 4.32 -3.48 7.8 -7.8 7.8 l-22.8 0 l0 -15.6 l9.32 0 l0 0.04 l0 6.2 l13.48 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-16.56 0 l0 -6.24 l-3.12 0 l0 9.36 l19.68 0 l0.04 0 c2.56 0 4.64 -2.08 4.64 -4.68 c0 -2.44 -1.96 -4.52 -4.4 -4.64 l-10.64 0 l0 -3.12 l10.52 0 c2.52 -0.12 4.52 -2.12 4.52 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-0.04 0 l-19.68 0 l0 3.12 l19.68 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-22.8 0 l0 -9.36 l22.8 0 c4.32 0 7.8 3.48 7.8 7.8 c0 2.56 -1.2 4.8 -3.12 6.24 z M37.152 15.079999999999998 l0 15.56 l27.64 0 l0 9.36 l-30.76 0 l0 -3.12 l27.68 0 l0 -3.12 l-27.68 0 l0 -21.8 l9.36 0 l0 15.6 l-3.12 0 l0 -12.48 l-3.12 0 z M80.584 10.719999999999999 c8.4 0 15.24 6.84 15.24 15.28 s-6.84 15.24 -15.24 15.24 c-8.44 0 -15.28 -6.8 -15.28 -15.24 s6.84 -15.28 15.28 -15.28 z M80.584 38.16 c6.72 0 12.16 -5.44 12.16 -12.16 s-5.44 -12.2 -12.16 -12.2 c-6.76 0 -12.2 5.48 -12.2 12.2 s5.44 12.16 12.2 12.16 z M80.584 16.88 c5 0 9.08 4.12 9.08 9.12 s-4.08 9.08 -9.08 9.08 s-9.12 -4.08 -9.12 -9.08 s4.12 -9.12 9.12 -9.12 z M80.584 32 c3.32 0 6 -2.68 6 -6 c0 -3.36 -2.68 -6.04 -6 -6.04 c-3.36 0 -6.04 2.68 -6.04 6.04 c0 3.32 2.68 6 6.04 6 z M111.976 24.4 l17.92 0 l0 15.6 l-17.24 0 c-7.48 -0.32 -13.4 -6.48 -13.4 -14 c0 -7.56 5.92 -13.72 13.4 -14.04 l17.24 0 l0 9.4 l-17.24 0 c-2.36 0.2 -4.16 2.24 -4.16 4.6 c0 2.44 1.8 4.36 4.16 4.68 l10.96 0 l0 3.12 l-10.96 0 c-4.04 -0.32 -7.24 -3.64 -7.24 -7.8 c0 -4 3.08 -7.44 7.08 -7.76 l14.24 0 l0 -3.12 l-14.08 0 c-5.72 0.32 -10.28 5.08 -10.28 10.92 c0 5.8 4.56 10.56 10.28 10.88 l14.08 0 l0 -9.36 l-14.76 0 l0 -3.12 z M163.928 11.96 l0 9.36 l-21.24 0 l0 3.12 l15.76 0 l0 3.12 l-18.88 0 l0 -9.36 l21.24 0 l0 -3.12 l-24.36 0 l0 21.8 l24.36 0 l0 -3.12 l-21.24 0 l0 -3.12 l24.36 0 l0 9.36 l-30.6 0 l0 -28.04 l30.6 0 z M197.96 11.96 l0 9.36 l-21.24 0 l0 3.12 l15.76 0 l0 3.12 l-18.88 0 l0 -9.36 l21.24 0 l0 -3.12 l-24.36 0 l0 21.8 l24.36 0 l0 -3.12 l-21.24 0 l0 -3.12 l24.36 0 l0 9.36 l-30.6 0 l0 -28.04 l30.6 0 z M216.79200000000003 30.32 l2.28 -2.12 l12.84 11.8 l-13.8 0 l-10.48 -9.6 l16.24 -15.32 l-4.52 0 l-11.72 11.32 l0 -11.32 l-3.12 0 l0 21.8 l5.52 0 l3.44 3.12 l-12.08 0 l0 -28.04 l9.36 0 l0 6.88 l7.36 -6.88 l13.64 0 l-19.56 18.4 l7.12 6.52 l4.6 0 z M272.93600000000004 30.64 l1.8 -3.12 l5.44 9.36 l3.6 0 c-0.8 -1.28 -8.4 -14.28 -9.04 -15.56 l-7.84 13.6 l-2.92 5.08 l-10.8 0 c0.6 -1 4.64 -8.04 8.52 -14.8 c2.28 -3.96 4.8 -8.4 7.64 -13.24 l3.6 0 l-7.44 12.88 l-6.92 12.04 l3.6 0 c4.92 -8.68 8 -13.8 12.56 -21.8 c0.28 0.48 14.36 24.88 14.44 24.92 l-10.8 0 z M292.608 11.96 l22.84 0 c4.28 0 7.76 3.48 7.76 7.8 c0 4.28 -3.48 7.8 -7.76 7.8 l-19.72 -0.04 l0 9.36 l3.12 0 l0 -6.24 l3.08 0 l0 9.36 l-9.32 0 l0 -15.6 l22.84 0.04 c2.56 0 4.64 -2.12 4.64 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-19.72 0 l0 3.12 l19.72 0 c0.8 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.56 1.56 l-0.04 0 l-22.72 0 l0 -9.36 z M325.04 11.96 l22.84 0 c4.28 0 7.76 3.48 7.76 7.8 c0 4.28 -3.48 7.8 -7.76 7.8 l-19.72 -0.04 l0 9.36 l3.12 0 l0 -6.24 l3.08 0 l0 9.36 l-9.32 0 l0 -15.6 l22.84 0.04 c2.56 0 4.64 -2.12 4.64 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-19.72 0 l0 3.12 l19.72 0 c0.8 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.56 1.56 l-0.04 0 l-22.72 0 l0 -9.36 z">
      </path>
    </g>
    <g id="SvgjsG1808"
      transform="matrix(1.4365565146746595,0,0,1.4365565146746595,12.557853856552725,41.61050905009533)"
      fill="url(#SvgjsLinearGradient1811)">
      <path
        d="M10.45 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.45 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 c0.18 0 0.3 0.12 0.3 0.3 l0 12 l6.88 0 z M23.011000000000003 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.55 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l8.53 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.96 0 l0 4.15 l6.43 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.43 0 l0 4.75 l6.98 0 z M42.392999999999994 12.440000000000001 c1.97 0.45 2.84 1.88 2.84 3.53 c0 2.77 -1.56 4.03 -4.97 4.03 l-4.63 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l4.77 0 c3.13 0 4.13 1.7 4.13 3.39 c0 1.43 -0.65 2.59 -2.14 3.05 z M42.733 9.55 c0 -1.29 -0.81 -1.85 -2.5 -1.85 l-3.03 0 l0 4.05 l3.1 0 c1.63 0 2.43 -0.81 2.43 -2.2 z M40.233 18.3 c2.06 0 3.1 -0.62 3.1 -2.43 c0 -1.48 -0.88 -2.52 -3.02 -2.52 l-3.11 0 l0 4.95 l3.03 0 z M57.39399999999999 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.45 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 c0.18 0 0.3 0.12 0.3 0.3 l0 12 l6.88 0 z M67.875 20.26 c-3.96 0 -7.17 -3.2 -7.17 -7.2 c0 -4.02 3.21 -7.22 7.17 -7.22 c3.95 0 7.16 3.2 7.16 7.22 c0 4 -3.21 7.2 -7.16 7.2 z M67.875 18.49 c2.97 0 5.32 -2.4 5.32 -5.43 c0 -3.05 -2.35 -5.45 -5.32 -5.45 c-2.98 0 -5.33 2.4 -5.33 5.45 c0 3.03 2.35 5.43 5.33 5.43 z M91.556 12.620000000000001 c0.18 0 0.3 0.12 0.3 0.3 l0 0.79 c0 3.69 -2.42 6.55 -6.4 6.55 c-4.03 0 -7.11 -3.22 -7.11 -7.23 c0 -4 3.1 -7.19 7.08 -7.19 c1.92 0 3.49 0.73 4.77 1.91 c0.14 0.13 0.15 0.28 0.01 0.42 l-0.8 0.85 c-0.14 0.14 -0.28 0.12 -0.42 0 c-0.99 -0.84 -2.11 -1.36 -3.56 -1.36 c-2.87 0 -5.17 2.31 -5.17 5.37 c0 3.07 2.25 5.4 5.2 5.4 c2.68 0 4.52 -1.73 4.6 -4.14 l-4.41 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -1.07 c0 -0.18 0.12 -0.3 0.3 -0.3 l5.91 0 z M110.84799999999998 20.26 c-3.96 0 -7.17 -3.2 -7.17 -7.2 c0 -4.02 3.21 -7.22 7.17 -7.22 c3.95 0 7.16 3.2 7.16 7.22 c0 4 -3.21 7.2 -7.16 7.2 z M110.84799999999998 18.49 c2.97 0 5.32 -2.4 5.32 -5.43 c0 -3.05 -2.35 -5.45 -5.32 -5.45 c-2.98 0 -5.33 2.4 -5.33 5.45 c0 3.03 2.35 5.43 5.33 5.43 z M131.97899999999998 6 c0.18 0 0.3 0.12 0.3 0.3 l0 13.4 c0 0.16 -0.1 0.28 -0.25 0.3 l-1.64 0 c-0.16 0 -0.28 -0.06 -0.36 -0.2 l-6.44 -11.04 l0 10.94 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.17 0.1 -0.28 0.26 -0.3 l1.63 0 c0.16 0 0.28 0.06 0.36 0.2 l6.44 11.03 l0 -10.93 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 z M145.13999999999996 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.45 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 c0.18 0 0.3 0.12 0.3 0.3 l0 12 l6.88 0 z M160.041 6 c0.24 0 0.33 0.15 0.2 0.36 l-5.25 8.21 l0 5.13 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -5.13 l-5.26 -8.21 c-0.13 -0.21 -0.04 -0.36 0.2 -0.36 l1.47 0 c0.16 0 0.27 0.06 0.36 0.2 l4.16 6.51 l4.16 -6.51 c0.09 -0.14 0.2 -0.2 0.36 -0.2 l1.47 0 z M184.68299999999996 12.620000000000001 c0.18 0 0.3 0.12 0.3 0.3 l0 0.79 c0 3.69 -2.42 6.55 -6.4 6.55 c-4.03 0 -7.11 -3.22 -7.11 -7.23 c0 -4 3.1 -7.19 7.08 -7.19 c1.92 0 3.49 0.73 4.77 1.91 c0.14 0.13 0.15 0.28 0.01 0.42 l-0.8 0.85 c-0.14 0.14 -0.28 0.12 -0.42 0 c-0.99 -0.84 -2.11 -1.36 -3.56 -1.36 c-2.87 0 -5.17 2.31 -5.17 5.37 c0 3.07 2.25 5.4 5.2 5.4 c2.68 0 4.52 -1.73 4.6 -4.14 l-4.41 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -1.07 c0 -0.18 0.12 -0.3 0.3 -0.3 l5.91 0 z M197.54399999999998 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.55 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l8.53 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.96 0 l0 4.15 l6.43 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.43 0 l0 4.75 l6.98 0 z M210.45499999999998 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.55 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l8.53 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.96 0 l0 4.15 l6.43 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.43 0 l0 4.75 l6.98 0 z M224.38599999999997 19.64 c0.14 0.2 0.06 0.36 -0.18 0.36 l-1.53 0 c-0.16 0 -0.26 -0.04 -0.36 -0.18 l-4.63 -6.3 l-1.55 1.74 l0 4.44 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 c0.18 0 0.3 0.12 0.3 0.3 l0 6.47 l5.82 -6.61 c0.1 -0.12 0.22 -0.16 0.36 -0.16 l1.6 0 c0.26 0 0.34 0.18 0.16 0.36 l-5.18 5.81 z">
      </path>
    </g>
  </svg>
}
export default Logo;