import React from "react";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-300 mt-5">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img className="h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAACVCAMAAADSU+lbAAAAgVBMVEX///9WS1BTSE1JPEJLPkRPQ0hHOkBRRUpMQEVQRElENj339/fa2NmAeXxKPkNVSU/U0tPv7u++ury4tLZoX2NZTlOclpnt7O1tZGjl4+Tz8/OhnJ6Qio2xra/HxMVgVltza2/DwMGrp6mIgYRAMTiTjZB6cnadmJrPzc5jWl43Ji0nPzBcAAAe4ElEQVR4nO1d65qiuhJtQ4BwExURUUQEtXG//wMeAkkIpIJod0/v2d+pPzOtCGElqXtVPj7+W+Qlq83pmAXbhu7BrYwufuL99qD+Ylodg61jGZg4NurINgkxLGcb7CJ//dvD+wvJ3xumjRYQNdhivNhmm/S3B/l3UW7ZIJ4yssRFt/zw2yP9ayi1niDKyDFQECW/Pdq/g/bPVmlPNnbum//LracUGbMh7WA1bv5vj/nfTrEQTq2sb6R9S5gQ00Gg4HKsYvPbo/5XUy6WabytPsso2qwo1Zuo0VX3cYghlQBhdPq/wNLSzuSb+gapoQe/PgYPFzsjVENiHv+PqoZuAi3behS7C8QrvXSTmRYZLVeyOP7x0f4dtJNWIEKNgo+3xwukMaXl1hzCGhL0Nl9N6qi83XanTf6XaWcHf7Or7kH2GdVaMygYalKIWMY++IS3dVru3cHlobV/QwfwyyB0cSMCHZNg7IZB+bcYad4miA1s2rbdDN0wH1UOXVXjgei5FmU6ySb96jpYrAjvXhtWUj4MMpxHm+D96bW7/AqtKpcM5DWyl4YqhQ69JrUw8X3OVvZOZyzf2CR1+3Hir55vY2/nmuFCJYSNf7t65lUuZByZ9njgO9Ijepu9AzdbS0bVqhL/dnYNw3p0u7hRFnIfMrfSBwGGxe5y+8ob/zztNUNH1nCPrYWpj28vaUb5YK06iJjtnyFx9llWxMslNuJMmaNDPGUGW+UX3/pH6W7qBx7JF5Yce7NsBPHxc1dR+jxu0qcu0+iMwQcgx0HsP9cxSIF+XO28/ott3uNyYuBEXj2VWDdmY4yaZifRrOs/xh2UaDJ5pfHM+WINFdhaGheySUdOv96dCn5QkiS+76/yfLMpj8cquxcN7c8SPZoPgup2PF1+SIPw+wWESIsUwSYCB35XrU6Cz8d6Hh9IAgN2ZPeg1vL1D361jc24KqPL5hKVWUyWfG5M6bnrxn7bLmLLdV3LsloPxBLTt7F5JGJErX6D3XP5E36zgg0xxOG9rNODd0jrsiBct3cl6VyNVppt7E+vzHQeT+9m9JAuPvG5JtVg0tY15wmGmAK/QtrQwzQh/Ph+FrJicgctNjJTTDO284jEUcuBLLPd4NXheJkrXhzSkQzphlxtIypbYQYy4RI0e8pWJlH9dlC5YYTGYibrBm4H/Ue+JQ+leIcZ1Qu2AVAcY44E4kuM9GKKP8sBdCYWarCZ/RDA4m82qIvv9u6woZNo/AVTnNBZ+qxfW2b8VCrBdAgsPlV1QCNbiBhFtkfjCeR7wgBW0cHthtZdffwapM27fLOqu2L+UEvRhrxzp0PG0kdi9FbVsXaqrkdRtHkl/Hyi+7+bQz+4Xvdlw7GTbrZQIa7i+8cFZEhiSZj6rwUeIMLf65g5seXgql8VbO30DzxyEWNQRNKyItSrsbw+Vi8904+dBR4uc68T8mgvPtki7cDEFgrkCzmFqNXwKJFmdFQFsDTExQP5XvdBZmuHrmB64JCaq486i63Ot2HGl1cf6t0xGZq9CXvWXXxyZlBZ0O+lvZ9zHm9SPcp1F/E+CKrd7thQedpc6tr307TRWdcKpRGXJcWrbzBJhX7o7CtTiKJcbP1dbNiMt1qVjsN7nl712/0z5N9M6jjCa7WO2evGym+HmO65eDu+sYFTl62ob5VSTLEeaIaMGKZECAmx9Rcc0AUyR3s4WZ3K2x1ZneLd7rBtcDuWeaP4yhdGw8XNfIi9kE/4A/YfKkmYpmz/4ve2771bqfhNgQvSgW0xaPUrmN7GUaaFuZUWR5rfAts1aPx0cBFqLRbLje/ZaaXRv4Tmy79P2fyhLXC1hCmbZ3R+zxyKuueaL3p1J4lvMRuwnff6dcqIBOJN8tuDYGdS9W6EB3V2F2WtPosbTUJzm4spG6STvff+XIOAdsO7xGQDiOk2HGFajxRBzH7k5dUVOzMtQ9Too9dgDGvKb42Z1i8whd6216UOTJFavrl5hcL4jVY/HzpkrSiYekN7koVB0t3iVdMQMAdLZgpzmcQHJptxgnpMuXr9tn3J1GDzGx1UAlOAoTzGe/+jlNVr0q7SusDTfhGIDOANuCuHoSMwvauXSphGnA+/K7iZLvmdNj9P0gOYtKdiKnuJSascPqw3nEEYiiUl7NbM5PeXszAVIupdANgNjNeslkkSmH4qX0GYenvh09zTNfoOoo1KC2qSbMkxELnF+QRT5n18H1P2VDIrZJjmm8aS+Dzlyj7z/DzPmVJTG3pMzyqmvQMbHQ7Bux42tAUk/4fXqSBMKM3ElOl7X8Z0Ed+KM/33vK+OUJL3YVXesYVxa/IurViOcKbHrWvgxgy23HMWpdzcN9W8GwjTw4aL4yBScqJeANVY7MYMbF12t26Fkudt8CxMmRz98t5vHtQlJaI2e36bDWZ9HQWxZcp7EplGxlQF70b6FAaqLoowxHNM/ajaL4RTGumjxHMoNC3Jv+5vbkXIb3i+F/tzzCds3jpdLN6ty8jAvYYcbO+E+VFhbKsedLPzOCdnHRITmFI145AHdnPjt7injhBmg17vDTl0t6DRIvEKTzAN2O++qktBkFj3VnAdwdyHBbPdDgvtDQBvl8DU9+lEzQdrLrHwoXeeYiJPMOUpce8a7Pwl4Wfj+6nc6jek2RhvgX7wqpu/f1z8E4C2D20X6m2Si8zUTyE7cA4l7uQIeXKHhiw/nygYmcL0x6jFK59+KxDTVLGjIL/aHBpELSnTmRwLaST7IrRdnlSD9mf+nblcYmIOFh+EaQxFNr+VrIuwl3T0BFNu77+ptB+4U9rElkv2DdmuhaG1GTqGUZ1oqN7z1jmP6fILkVnmeRQdqwZvIRrmYYqQQzAlfSwdNbKsc7i71rLPyaMfY5q7MlwJKFhAN5LWyxNMe8Fv5wdBnnfQ+0SaLw+HJEn9/PTZLjhE7G3Z5won+XGLR9mEiMQ3edJGng/Uu2C8+nZm2hRWMT2M+FyDyqPITpfGYNh83h8E4LKIkG214VZGmh+ZKWa2H9er/FLeH5hI41HuETrEss+PM2JZp88w7f2PfCpdl4QhOoOKwCEotucF7nJVmhmmD3ALtTIuPS7kpDkzHpd4nAbg4IGD3VtVrQ8EMMEPgzQqYgRRKk9+GgXuaN+ih2KB0LVu2kf547R86CKdiFiP28VPm6WU+KcKN7r0M0xXmkA0nJ+aXkcsE1l3WAvzNkJhXjiZsurTAabm2IOzvhkwptKbE1wCSnW6swaahK3adIGNLDWtMgL9BAjH5WDFeKcYO08w7bOqhgT6abjC0F9VTOi1JRc5DvBlIT0WUjoaO3ASU9vWpXoeMmmLQC75AMeQZzLZq2qdAXkBIgT5T2VMT7AqNgdTZEynsKYFi6wAzDmSHgs5xA8WiCl/vnGfMPxqJFgihOm90Dg2x1WrNiAl21FAC0nG9APWf2ZgitBT46tq15UFLIuk54zhAsC8XoKYMsXxyWQeCj5jEKYwUB+K9jsIFj4l5rTqMK1B7vwcUxTOeGTrhScQAg8haaEYCc0202NqaWHhVBE9pnoaKKYmtMP1tJIx/di4wEqFMT30BgZazJrFT0PzYqUYvwWpxhoZ1T7feAqpyF1/DdOPY8+RTEgQTdAQ04/Vean4jWBMvR5TMtPrUjUvZwDwizYGYFYHdVXqMMVzChHUZKc55ImJftmwHGH68XGpHtha0tpsNBPTOWul+0nzcuDNOPMCOQONh2gwBbVDlTrv/6tBciGxXw5aKpg2r77288vpdORv+gTTmS9GyXfh4C3LzwUDlq36qsEUkngQtfd/FVPO3GbthQExTG1AOPDCiieYkhemMTNBlzerugfz13Y6O8qFk+ogavWul5M5ugAdyI+miWMKBNBFwH8S05dyedb2wgA00DWbHSBRy2t9LF/EtA1BvIxppwVZr7uTWYLh+5i+lsS7M20odaiLIRPgVt0S1mA624NW61SOKUrsdwTUx9cxfdGDnZohAT5u5QG49Tu0gSFQ/Xj20jvEb2DaSce5AliifPk1TA0oFj5BgQ39otWmlkBCMwseaDCdLz8K9AamDUMN4zeycjZfXKem8vn+PgXzhoCbv7WxALuU+R+BIXRKrRw8O2xu96KCq8waeLSYerpy1Ii8F0j6IqaqMVlbtvVo3zSJiqsSQ25+pkzDR5uPC+VoeiwKAOxAZihc+eJOA5e2PLTJFbJvG+aiwTQtrpYbgoKo4YtvBTy/iClW9itl0MjYH8uAEIRC5Xd7tATW8QWDXISnewCY8qIvo0378T57vz6G/YUwpl13PwRWhtfNoEZ7J6lmdE36Iqaqlt5l1iKz9ZgCQuRoQvtpbYHp2dy1CmHK/T3kvFlFC9lN6aq2cq7BVNwF+M1HaoTjNVFa2D7SgdbZQmvr8HS19zAFgBhkKwO8k65jYKrvBBiBKHYEvJcr4UNDxGgzgmjhURvcA1TmWoMpTysFK8MTQ2Ft1CIjZhCYhoMgBaal9zHVqD8DTAEtvuGDKsNolu8VWCjcZoUwzQeRHoRdqwiyLNtbhmOru0OD6VpyrqnfJobigOjqMOx2D2oTy05vYxrCmF7kd8Uqj0xgm98HbKK+1nEaU0TM+0bYC6sb4IrRYCoN1la/bTAdrwmptgX0XLTEUwBfx7T9mbpj5OgSVOG6bibxqm5+DxCwfSwHwLSHg8Snp2lzDaYhYBFJYRtHZeeJoewoCVNTqxszBRBKmH+CKQIxzQYBYOC5NCqhCe6MqS/VhDDl7ntrTiuGlLyH6Xim9/2K0b8EaxpoAu6LGTJKWf+fo+gLBuqZw5kmTd8jEho/Z1rnWW6xtzBNjfGrS87/CXOALeYpTOEJ6eR+MXrmOKCliovWppzlH7z3sUtgCF16lr2dVzmUvrP3fWP03OMgVqwNb7As/ilMgYTaD47pELKLmpqHxz9uMYVvOSS5MbQOUzQ3AflNTIe8a9QDGJ016j/rdfMmpiMXQwYkcIyV6VbnnFN/mUl5CzpMAb0Cprf2/mqon66uo1fThVOZHIDcwTMwHUUvDsfYGjewIyO1uZMtz91ZB1nYQZiarxS2+w2mUHx/GlM80EFrd9wz1YW9AbzSAJBDczAdG43e6igVKjjYUNpfdoqGXrnjNEiKATCl95nvaKwN0Lv8DNNhJCEpz1Y/09RdA5ctfRFTSPhx4Wjub5uVMlL2wOsTRjhMBNFgOvBwHaac/lTnB/jNNKbNj/Dopmue/EjiIos0kvaLmCqOG0qd3CPgz7g1CIadJcoH8gBgTc3LDSc0gKxbTm9hmi+BYUatEx+XE+4pjinAGWZhCimvrXPeLsDn8bd4VoY1MMcgTBslcFDdt3KnbkntKMBl/xRTwLFG1X7I4dMTwxQSoLMwBdV3akyZcOxP5GNC8dOe/GFpAoBpoxYQyXL0mxex95tUo09oMD09w3SBlf3d7KAnNstXMQUe2mxwE1kw++69VtNSatR6DxhCZveDPhy3Xeo7tjTxo/xdTIFK173pTpssrNLgfUxBbCJXwy6LHiu4/LijZJT+CQyhkjDNr3z1OwV8Q+rFehnT1k2jRsnSeLpKmVX7glk18zCFc/E0Ul02tKaSLYbdDMEhNAy33/u8GwKKNRNFwxlAQuccTF9u2z+FKTcOwaTQHtNX8jsGOYOG/jquSE3U8DaiQpoVxiu0de5UGKFXMe3iSuTVaLTAFNBDeNYu3HSmz+tTTHotDasf9ekIF65I8bJgANPGAJR0KRZXgl6jJYopkJ83B1NNv109ccal9hicj6miGOuoHBa26KUnb+NYrZZaTOklfQSOehEQ0oeOP00Q03ISU4b4q2khKe+HByzw2ZiixSwf5mbstdKlO3FFyvW5mgBgSq/pvQ2pS4wgtq66pb97B1PezSR8rfo+mYEpmDgiY9roMDOeqjoCdY09eReRvQg6aTDtFR1vS739PlQm1RJlIu9iurBfy0PjpQAWgOmacT/Yob2WtXIUP00/7xsVCe+Oxq3E57mxCgSmqpboaoCAibo0AWbbVxJAtxIHJ5n3V3pm8aYsIfCjtT2F6ag+CoovS+RVAlIr4nanhqEyHwz1dwp1ToPpbEVHg+nnJKZSb/riBVBFgfkUpqDFM67jc4OJ/Z+bYvBm9aRTAC/qpfboRC+k7hsNS1aOxtFgKoVBAUylxhm2DW/Ew/EfhaPwdH7I7344Kx1/JVLOvHSQzldTF/219Elcg4GDhzzIbB8kFVm1D1itHILE400580GDaTaJqezHQThT18y6DIml3JWXnEFc2JtolNnHgiUiaKe+4fp0lt3j1FRm84/gzn68zwmFMWXbSDU7PN5j3laYTronih1CtTNgTUsr8QmmtH46G8Ln32wSAlY9UwDh1qjcmlGT83StM0z3fOzPY/aS1XE7DDjQnL500oXKawlbd0DKO7sX48uSnj8Py7H9qu2xPXzT1ogAWI30Eio2/rh637HMLFolyWGdpNFt0VVdq3dl6gJcjyP69qovnz94W4nRg5FpmUUQ3I5BcN9axqjPhEEXFd9wUMtwsXS6ofL+pwtlh22krBxrv6v99eGQ+Plty042No8+50TrFWufQ4pocGZRupMGH8blSuJdSX2DekzYxHCtkHbQcLiZbRabYf0/+xms1ou1Tx6lFARJL7tYtDHZZmqNantYh20rFcGojYklPLQCaqe8mp8xP5GKMjoryo/lmyMT01xXhJd9IygTL+J9ERTbGC25gEQE0zM6d8fjLdvHMRk2TWh/ke2On7fgEdvL2X3UEDbj+zGKNlF0vMcm54mw6d3rEsg0XGMbZFWwx65FxBzRH57G0UQd2Yt2e3GtD3LbiG/5Zu8ZHjGqk58mzXJM/WMB1cWqL4uQrfS6od3ZTNNRZ7xNmiWk+/LF/jUI0a71tDNOf1fYKT/yuIn8zp5Cqi/4T45eYYT37UMO7E9YkeIRaG64y7X9tNePuYhjhaN8D9nu/ba73d/olwrfDva5p/jZD7vTf7wMP31Jh6vnfKJgxwtTs0TxnHoKw091QBIWuNKW+j3SudzvY8k3IpOvtdXWmHxX2wj4TtdK8pZ4TQSPP6UC03bL0s1JsCHT15od9iRa6h3UBKU3SNtXIJ1Gynn0gis/W7oJQMSthNjeMO8dHOIT9v1h9MHC2neHL0SbTe3LNA4JvEs9ptOdz+aRpTea86lNjfcDZagOHLW1Y2iTRmmQLBAmyDWVsfxsCGGKcr1LtVYEabq4vEoC0/U3YKrtetMCtdCMmJ5aPb442QSxRUgjUsMwRLZDsBsH5QCNWl+c8yEsEMkrx6dgop49VZW5d+h7MZ10uRx2rrL6QkQsdARdJl66KatGJ4zj7f12ypVwO1fPEOgaGOj77fuxJ07lVq4X30I9pt/AT4EqjSFMUXDGS5OdxWeb2Ijv7x6JzH0isI+OG639Rufu3anTfr6pwaTAVHEOvUPkaY6dl+bH7L5t6B58Rv77p8RwPQXWh5nnTXI+cEyn1unvYoo07RaNP3Zk9KSXm8cVJJWA72s4fNMRs3VpU0niTHcIHYBBD5KXfjAD00ZEOEMIl04RbI0uBwY5g3aWUOTkJ0jUiIJSnPn3B35Hbu9Ddb+MWrlvG+fiVpZZcZY6yNtUle3rgYxl3xfaJMVuc7mcbsXD6DqkDzC1HXN84IxtxEV2u1V7JLUR71jgao+a599vjSQJRVdK881jY16liZPgpBpoeddUItawaknmGf6qri9R25bDvee8dXp97yYuNFB2alTZE08ROKX1Kdu2zSZDo3f0NnwtC5GMqUuM6lbuKiw3+7PuOVt462jLlBfhKU+vFfMxraM+z+OHDtEdEUcItNsirt7Lm0bY+3ZrPblSOmR+NYwlpm1I7cXAgMjpFgzFwZGdUcC9YMnRbpTj0evSiLzANHFPHT7eRfRht9HAu1p209ar0dKQPX68NRDv+QkSwT0oZBZL/n1B6UhZvPY/FFFNeztiXclCLmvr7KK+euhE1HjLNoTbvTN25IxbJa7aLa7JS75/9UCOl0j4D5yt8gY8MXqUhxgPhY6rYgqEYBp1QVolNBYlOd0rSxXJtJkYyONPdFTooTyhtV00mPLY6NzuV1+jPqSGjN1onOqxrC2NapIATCEwIrlihDKVPj9nbasxYqqyaY4loMvABVgV5Si66kh2KtrMCtAvklwzbQ7DrNxoVZKThp1IVUzhcMEe9YZDghfhQnxTGoVyNd3iGkwbVUVajpf+8QtNnzxKY3PwJ8mTVb+QLKSjUPgJNkoaRRKTaUx5y+22MfGB/ZUbkplQIAmWsFdy1vttQGNJrWWhwbTRRmxhhV/+6RWkDZYa4Hq7nPZC5kdUM9Pmzab8L9Ios8/BZnCqE+/Dyxhw0H7JnL7XiYKpmISja1SnyuA1Qo3sF1eecN9YbIP7uLZXxfjqLoJW4OiOJAlIv9zOUjviA5EwXV2xXZiEO025Hj4Hkq/TuKdwo5cvXbwwGKMF+/R+rDciLKVgKipCaW0PsUOHMZTMWYpAQmr0THqLBhw7rY+FO9T5G9wDidlXojLhcKNsNzgyVVjulNU2EOszCA4so/8FYL5AyTh2PSRt1RQPiyuYijytbr8JX8GJSLHgXn9dYVXHSStrgGnt2ka/Nm+sYDaturCbbV4/2fP7JAzmyxLpr4yTzUHkG0h/ntFiSqUTx4j3cq3DVLxX50kRhm0jDnt/Yj64j1oj3ratFZ9WjtzJ48YMlAJzq9NJ2I96E3vDzOqC/X3/o5g2rFN/Sp6+zDl7hmnFNSumfNZgA/o2agmEwm6OhCnFvZdLN9ZZOOUpFPy2eY/pmkceeRr+H8aU9lfWRGQmCgO0mLKqiJ3QKNhWjcDGZ52CbCod5GkzIYEp5TMSplx1T3huHPtCWqd3kZRx7bZEt/f/jCHFh3M2AFSnWmHrMe3W5Snu7oh4azn6rRLEWrMKfNu9jWycqx5TUVDOMoR406SdKe5fsbwc/Kja+3YyCjwP4efIywt3nPhApvJmtZhyo9PzC9pOqyjr7i4UGCVjiam0jum6120mH1lpjzDtnUo3g1u5tOdfo6K5DO476o3Pw4qePCFSDDtdSt/Y56fIP8ZL0jtxbauaiotlqkeLZwFxlL0H6vsvdD0+R+GENfPSZM2c3i336vbS3dWu08rkLCSyyLkq8D/dhQ0rGBj0e7vv6NvpIBOx3p+jNKq2yFoSQgxzssHnFKa9lZBft6MvRyEXlgrQ2fvJ5liJZ3p6TAPbYpele8q7D+yvBrcBpsm13+qdWvd6I+pvonVaR2VUP2ugPLFOe7dU3/p0zX1W8tpnTm+olRbVEjSY3m2w7GBtjB1PqWBLnYfwpUbbv0F6TPsEI4m4U3EQM2BRBqiaoxrz0x7T5i9IH6EGocaZx+pOXukH/ysEYCpqRtTepTtxxLHsxuAarMpl/IFfaoBpG5VVNd32EBUY07RTVv+MV+orJDDtMzX6mhE83GVS3dDi2n/MYzNqna9HI4kC6hZFgemh68g+nDZ22A+Iqc/0Gcjp+u8icdJEL0vvUuu8h5R4GYV9sqO8WEQagD1qtZvGdMJE4Xp70InYuKxkCUvth7wTO2Gsx9S7sFumFUvbm1/Y/GvEC+7Qtk7X9Di8y71HjoY1t0c/TVJ/kyEs5SJKvQUu/eIl12K38dvO3Ic0D6z2B+ic+37aUMt2zVOaHLwkXXHnDXKLkj4hzW+myDUUmF6u7j673bI9P2j4WXLPv4FEziTCRnyOQ4sotRmGYZPRx3Lpx+BgPGQSC8eP/fbcH4vc3NmixE68N1B8XhiSvYeIYSHTkvL8e0xpu2o5oQL9oUD0lyiRvVmzs+0ln2gOZP89Odg2fJbTMsB0cOO3z9z+o7R/9oIAycv0J05CdqTogfw5ct46dfePE3xuM5o8f1vipvnT0oQ3yIYxNcF6zX8jVYAv237UE+UZsv3D866+dbWCmCL8hxKlvoG8u8IR8WPdlmdogJLiheLwxrsFVXNNIh024gy+AMDUcfd/x75nVBIpY5umOh47a/7yMAhrCBQiB4vqvEE0ukP5+JGc9oMzuhEiON6GkosM2VLJGbKXYZRuCswfHdqS9iswZYkLDs7+CuEkkXcJztjAGC+Nxf5W9/4Rv7xvGzUH23Fxyz3Ra82oGGOreRuA7jZ1eX/Y9JBrwyDnLuc7Pd3PpmUYhhVug6qIrfZ8dAOfg87qWl+qbYibRf4ISoFpf95V50r4Q1ln301e6udRXgMn6SSNPp601kyf4O+QgDqeE5Z0JVmYjTpf55vaTw7SR35d12lXbNg8JYpqf1CP0DwgTTwp60tYuWmnVUBt9v4rJNXd29iMY66FTleDzKa+eMgsygb6475LFf5DiXy/Q/kgezzkzBF/U4q9L3XNoHWFPAj0rKXr301Ktku3jL5nmX54Gp0YOl/8v0PrGCi+h04zeo92pnr3RiJOd5v862ldLMevPN1a9yVKIDfBX6Tqv0tHa7iYSPGNN6+vCqjGnw3m/w4lt0VvIiDjxaPJn9DqMTCtEEH/afnU02FTnS1MC/6t4tt53WZvEdMxTVqpbBRTXdD/a+Ql9eZ0uvxIaCi9lLuyvH2ecm0DuP8BfK7rQnjhhmAAAAAASUVORK5CYII=" alt="" />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          The Toyland is one of the leading reputed online
          toy sealing company in Bangladesh.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                Toys
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                History
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                Categorys
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                to="/"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              to="/"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center pb-2"><FaRegCopyright className="inline"></FaRegCopyright> All rights resarved by Toyland || 2023 </p>
    </footer>
  );
};

export default Footer;
