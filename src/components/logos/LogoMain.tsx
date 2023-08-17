import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'
import classNames from 'classnames'
import type { LogoProps } from '../../models'

export const LogoMain: FC<LogoProps> = (props) => {
  const { short, className } = props
  const { i18n } = useTranslation()

  const height = 64
  const width = useMemo(() => short ? height : 400, [short])

  return (
    <span title={i18n.t('logo', { name: 'yetanotherblock' })}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('tw-h-8 tw-w-auto', className)}
      >
        <path d="M64 32C64 48.5685 50.5685 62 34 62C17.4315 62 4 48.5685 4 32C4 15.4315 17.4315 2 34 2C50.5685 2 64 15.4315 64 32Z" className="tw-fill-black" />
        <rect
          x="43"
          y="32"
          width="6"
          height="12"
          className="tw-fill-[#808080]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 44C40.6274 44 46 38.6274 46 32C46 25.3726 40.6274 20 34 20C27.3726 20 22 25.3726 22 32C22 38.6274 27.3726 44 34 44ZM34 36C36.2091 36 38 34.2091 38 32C38 29.7909 36.2091 28 34 28C31.7909 28 30 29.7909 30 32C30 34.2091 31.7909 36 34 36Z"
          className="tw-fill-white"
        />
        {short
          ? null
          : (
            <g>
              <g className="tw-fill-[#808080]">
                <path d="M83.704 39.184L90.352 23.296H94.528L81.232 52.984H77.008L81.472 43L73.36 23.296H77.608L83.704 39.184Z" />
                <path d="M100.308 34C100.324 35.184 100.58 36.264 101.076 37.24C101.572 38.216 102.308 38.992 103.284 39.568C104.276 40.144 105.492 40.432 106.932 40.432C108.148 40.432 109.18 40.256 110.028 39.904C110.892 39.536 111.596 39.104 112.14 38.608C112.684 38.096 113.076 37.64 113.316 37.24L115.356 39.76C114.828 40.528 114.18 41.2 113.412 41.776C112.66 42.352 111.74 42.792 110.652 43.096C109.564 43.416 108.236 43.576 106.668 43.576C104.556 43.576 102.724 43.128 101.172 42.232C99.6359 41.32 98.4519 40.064 97.6199 38.464C96.7879 36.848 96.3719 35 96.3719 32.92C96.3719 31 96.7639 29.272 97.5479 27.736C98.3319 26.184 99.4679 24.96 100.956 24.064C102.46 23.168 104.268 22.72 106.38 22.72C108.316 22.72 109.996 23.128 111.42 23.944C112.86 24.744 113.972 25.88 114.756 27.352C115.556 28.824 115.956 30.584 115.956 32.632C115.956 32.76 115.948 32.992 115.932 33.328C115.916 33.648 115.9 33.872 115.884 34H100.308ZM111.972 30.856C111.956 30.2 111.764 29.48 111.396 28.696C111.044 27.912 110.468 27.24 109.668 26.68C108.868 26.12 107.788 25.84 106.428 25.84C105.02 25.84 103.884 26.112 103.02 26.656C102.172 27.2 101.548 27.864 101.148 28.648C100.748 29.416 100.516 30.152 100.452 30.856H111.972Z" />
                <path d="M118.887 23.296H122.751V15.208H126.903V23.296H131.967V26.872H126.903V36.616C126.903 37.768 127.103 38.616 127.503 39.16C127.919 39.704 128.471 39.976 129.159 39.976C129.767 39.976 130.239 39.864 130.575 39.64C130.911 39.416 131.111 39.264 131.175 39.184L132.831 42.256C132.735 42.336 132.479 42.488 132.063 42.712C131.647 42.936 131.111 43.136 130.455 43.312C129.799 43.488 129.031 43.576 128.151 43.576C126.615 43.576 125.327 43.112 124.287 42.184C123.263 41.24 122.751 39.752 122.751 37.72V26.872H118.887V23.296Z" />
              </g>
              <g className="tw-fill-x0">
                <path d="M156.298 43V39.16C156.17 39.56 155.794 40.112 155.17 40.816C154.562 41.52 153.722 42.16 152.65 42.736C151.594 43.296 150.346 43.576 148.906 43.576C147.082 43.576 145.426 43.144 143.938 42.28C142.466 41.416 141.29 40.208 140.41 38.656C139.546 37.088 139.114 35.256 139.114 33.16C139.114 31.064 139.546 29.24 140.41 27.688C141.29 26.12 142.466 24.904 143.938 24.04C145.426 23.16 147.082 22.72 148.906 22.72C150.33 22.72 151.562 22.976 152.602 23.488C153.658 24 154.498 24.592 155.122 25.264C155.762 25.936 156.138 26.512 156.25 26.992V23.296H160.378V43H156.298ZM143.242 33.16C143.242 34.584 143.554 35.816 144.178 36.856C144.802 37.896 145.61 38.704 146.602 39.28C147.61 39.84 148.682 40.12 149.818 40.12C151.034 40.12 152.122 39.832 153.082 39.256C154.042 38.68 154.802 37.872 155.362 36.832C155.922 35.776 156.202 34.552 156.202 33.16C156.202 31.768 155.922 30.552 155.362 29.512C154.802 28.456 154.042 27.64 153.082 27.064C152.122 26.472 151.034 26.176 149.818 26.176C148.682 26.176 147.61 26.464 146.602 27.04C145.61 27.616 144.802 28.424 144.178 29.464C143.554 30.504 143.242 31.736 143.242 33.16Z" />
                <path d="M176.974 22.72C178.27 22.72 179.526 22.992 180.742 23.536C181.974 24.08 182.982 24.944 183.766 26.128C184.566 27.296 184.966 28.824 184.966 30.712V43H180.742V31.528C180.742 29.576 180.286 28.16 179.374 27.28C178.462 26.384 177.286 25.936 175.846 25.936C174.902 25.936 173.99 26.208 173.11 26.752C172.246 27.28 171.534 28.016 170.974 28.96C170.414 29.888 170.134 30.944 170.134 32.128V43H165.958V23.296H170.134V26.8C170.278 26.256 170.67 25.664 171.31 25.024C171.95 24.384 172.766 23.84 173.758 23.392C174.75 22.944 175.822 22.72 176.974 22.72Z" />
                <path d="M199.546 43.576C197.514 43.576 195.706 43.12 194.122 42.208C192.554 41.296 191.322 40.064 190.426 38.512C189.53 36.944 189.082 35.176 189.082 33.208C189.082 31.24 189.53 29.464 190.426 27.88C191.322 26.296 192.554 25.04 194.122 24.112C195.706 23.184 197.514 22.72 199.546 22.72C201.562 22.72 203.346 23.184 204.898 24.112C206.466 25.04 207.69 26.296 208.57 27.88C209.45 29.464 209.89 31.24 209.89 33.208C209.89 35.176 209.45 36.944 208.57 38.512C207.69 40.064 206.466 41.296 204.898 42.208C203.346 43.12 201.562 43.576 199.546 43.576ZM199.546 40C200.826 40 201.938 39.704 202.882 39.112C203.842 38.52 204.586 37.712 205.114 36.688C205.642 35.648 205.906 34.48 205.906 33.184C205.906 31.888 205.642 30.72 205.114 29.68C204.586 28.64 203.842 27.816 202.882 27.208C201.938 26.6 200.826 26.296 199.546 26.296C198.25 26.296 197.122 26.6 196.162 27.208C195.202 27.816 194.45 28.64 193.906 29.68C193.378 30.72 193.114 31.888 193.114 33.184C193.114 34.48 193.378 35.648 193.906 36.688C194.45 37.712 195.202 38.52 196.162 39.112C197.122 39.704 198.25 40 199.546 40Z" />
                <path d="M212.84 23.296H216.704V15.208H220.856V23.296H225.92V26.872H220.856V36.616C220.856 37.768 221.056 38.616 221.456 39.16C221.872 39.704 222.424 39.976 223.112 39.976C223.72 39.976 224.192 39.864 224.528 39.64C224.864 39.416 225.064 39.264 225.128 39.184L226.784 42.256C226.688 42.336 226.432 42.488 226.016 42.712C225.6 42.936 225.064 43.136 224.408 43.312C223.752 43.488 222.984 43.576 222.104 43.576C220.568 43.576 219.28 43.112 218.24 42.184C217.216 41.24 216.704 39.752 216.704 37.72V26.872H212.84V23.296Z" />
                <path d="M241.571 22.72C242.867 22.72 244.123 22.992 245.339 23.536C246.571 24.08 247.579 24.944 248.363 26.128C249.163 27.296 249.563 28.824 249.563 30.712V43H245.339V31.528C245.339 29.576 244.891 28.16 243.995 27.28C243.115 26.384 241.955 25.936 240.515 25.936C239.555 25.936 238.635 26.208 237.755 26.752C236.875 27.28 236.147 28.016 235.571 28.96C235.011 29.888 234.731 30.944 234.731 32.128V43H230.507V9.97601H234.731V26.8C234.875 26.256 235.259 25.664 235.883 25.024C236.523 24.384 237.339 23.84 238.331 23.392C239.323 22.944 240.403 22.72 241.571 22.72Z" />
                <path d="M257.824 34C257.84 35.184 258.096 36.264 258.592 37.24C259.088 38.216 259.824 38.992 260.8 39.568C261.792 40.144 263.008 40.432 264.448 40.432C265.664 40.432 266.696 40.256 267.544 39.904C268.408 39.536 269.112 39.104 269.656 38.608C270.2 38.096 270.592 37.64 270.832 37.24L272.872 39.76C272.344 40.528 271.696 41.2 270.928 41.776C270.176 42.352 269.256 42.792 268.168 43.096C267.08 43.416 265.752 43.576 264.184 43.576C262.072 43.576 260.24 43.128 258.688 42.232C257.152 41.32 255.968 40.064 255.136 38.464C254.304 36.848 253.888 35 253.888 32.92C253.888 31 254.28 29.272 255.064 27.736C255.848 26.184 256.984 24.96 258.472 24.064C259.976 23.168 261.784 22.72 263.896 22.72C265.832 22.72 267.512 23.128 268.936 23.944C270.376 24.744 271.488 25.88 272.272 27.352C273.072 28.824 273.472 30.584 273.472 32.632C273.472 32.76 273.464 32.992 273.448 33.328C273.432 33.648 273.416 33.872 273.4 34H257.824ZM269.488 30.856C269.472 30.2 269.28 29.48 268.912 28.696C268.56 27.912 267.984 27.24 267.184 26.68C266.384 26.12 265.304 25.84 263.944 25.84C262.536 25.84 261.4 26.112 260.536 26.656C259.688 27.2 259.064 27.864 258.664 28.648C258.264 29.416 258.032 30.152 257.968 30.856H269.488Z" />
                <path d="M282.187 43H278.035V23.296H282.187V26.704H282.067C282.147 26.288 282.443 25.768 282.955 25.144C283.467 24.52 284.171 23.96 285.067 23.464C285.963 22.968 287.035 22.72 288.283 22.72C289.195 22.72 289.995 22.848 290.683 23.104C291.387 23.344 291.883 23.584 292.171 23.824L290.467 27.28C290.243 27.056 289.851 26.832 289.291 26.608C288.731 26.368 288.035 26.248 287.203 26.248C286.147 26.248 285.243 26.576 284.491 27.232C283.739 27.888 283.163 28.68 282.763 29.608C282.379 30.52 282.187 31.368 282.187 32.152V43Z" />
                <path d="M294.768 43V9.97601H298.992V26.992C299.088 26.496 299.464 25.912 300.12 25.24C300.776 24.568 301.656 23.984 302.76 23.488C303.864 22.976 305.136 22.72 306.576 22.72C308.416 22.72 310.048 23.16 311.472 24.04C312.896 24.904 314.016 26.12 314.832 27.688C315.664 29.24 316.08 31.064 316.08 33.16C316.08 35.256 315.664 37.088 314.832 38.656C314.016 40.208 312.896 41.416 311.472 42.28C310.048 43.144 308.416 43.576 306.576 43.576C305.216 43.576 303.984 43.32 302.88 42.808C301.792 42.296 300.904 41.696 300.216 41.008C299.528 40.32 299.096 39.704 298.92 39.16V43H294.768ZM311.928 33.16C311.928 31.736 311.64 30.504 311.064 29.464C310.488 28.424 309.72 27.616 308.76 27.04C307.816 26.464 306.776 26.176 305.64 26.176C304.408 26.176 303.288 26.472 302.28 27.064C301.272 27.64 300.472 28.456 299.88 29.512C299.288 30.552 298.992 31.768 298.992 33.16C298.992 34.552 299.288 35.776 299.88 36.832C300.472 37.872 301.272 38.68 302.28 39.256C303.288 39.832 304.408 40.12 305.64 40.12C306.776 40.12 307.816 39.84 308.76 39.28C309.72 38.704 310.488 37.896 311.064 36.856C311.64 35.816 311.928 34.584 311.928 33.16Z" />
                <path d="M324.38 43H320.18V9.97601H324.38V43Z" />
                <path d="M339.515 43.576C337.483 43.576 335.675 43.12 334.091 42.208C332.523 41.296 331.291 40.064 330.395 38.512C329.499 36.944 329.051 35.176 329.051 33.208C329.051 31.24 329.499 29.464 330.395 27.88C331.291 26.296 332.523 25.04 334.091 24.112C335.675 23.184 337.483 22.72 339.515 22.72C341.531 22.72 343.315 23.184 344.867 24.112C346.435 25.04 347.659 26.296 348.539 27.88C349.419 29.464 349.859 31.24 349.859 33.208C349.859 35.176 349.419 36.944 348.539 38.512C347.659 40.064 346.435 41.296 344.867 42.208C343.315 43.12 341.531 43.576 339.515 43.576ZM339.515 40C340.795 40 341.907 39.704 342.851 39.112C343.811 38.52 344.555 37.712 345.083 36.688C345.611 35.648 345.875 34.48 345.875 33.184C345.875 31.888 345.611 30.72 345.083 29.68C344.555 28.64 343.811 27.816 342.851 27.208C341.907 26.6 340.795 26.296 339.515 26.296C338.219 26.296 337.091 26.6 336.131 27.208C335.171 27.816 334.419 28.64 333.875 29.68C333.347 30.72 333.083 31.888 333.083 33.184C333.083 34.48 333.347 35.648 333.875 36.688C334.419 37.712 335.171 38.52 336.131 39.112C337.091 39.704 338.219 40 339.515 40Z" />
                <path d="M363.777 40.12C365.025 40.12 366.033 39.92 366.801 39.52C367.569 39.12 368.049 38.832 368.241 38.656L370.281 41.656C370.121 41.8 369.737 42.032 369.129 42.352C368.537 42.656 367.769 42.936 366.825 43.192C365.897 43.448 364.841 43.576 363.657 43.576C361.849 43.576 360.169 43.176 358.617 42.376C357.065 41.56 355.809 40.376 354.849 38.824C353.905 37.272 353.433 35.376 353.433 33.136C353.433 30.88 353.905 28.984 354.849 27.448C355.809 25.896 357.065 24.72 358.617 23.92C360.169 23.12 361.849 22.72 363.657 22.72C364.825 22.72 365.865 22.864 366.777 23.152C367.689 23.424 368.441 23.728 369.033 24.064C369.625 24.4 370.017 24.656 370.209 24.832L368.145 27.832C368.017 27.704 367.769 27.512 367.401 27.256C367.049 26.984 366.569 26.736 365.961 26.512C365.353 26.288 364.625 26.176 363.777 26.176C362.753 26.176 361.753 26.456 360.777 27.016C359.817 27.56 359.025 28.352 358.401 29.392C357.777 30.432 357.465 31.68 357.465 33.136C357.465 34.592 357.777 35.848 358.401 36.904C359.025 37.944 359.817 38.744 360.777 39.304C361.753 39.848 362.753 40.12 363.777 40.12Z" />
                <path d="M386.459 23.296H391.499L381.323 32.68L392.171 43H387.059L377.915 34.264V43H373.739V9.97601H377.915V31.096L386.459 23.296Z" />
              </g>
            </g>
            )
        }
      </svg>
    </span>
  )
}
