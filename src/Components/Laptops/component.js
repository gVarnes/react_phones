import React, { useState } from 'react';

const Laptops = () => {
  const [cards] = useState([
    {
      id: 1,
      brand: 'HP',
      model: 'bla',
      memory: 256,
      price: 12999,
      haveDiscount: true,
      isStoredInFacility: true,
      color: 'white',
      country: 'korea',
      os: 'AMD',
      photo: 'https://content.rozetka.com.ua/goods/images/big/225753307.jpg',
    },
    {
      id: 2,
      brand: 'Apple',
      model: 'iMac',
      memory: 512,
      price: 19999,
      haveDiscount: false,
      isStoredInFacility: true,
      color: 'purple',
      country: 'usa',
      os: 'ios',
      photo: 'https://content2.rozetka.com.ua/goods/images/big/37393876.jpg',
    },
  ]);

  //   return (
  //     <Container sx={{ mt: '20px' }} maxWidth="xl">
  //       <AppButton btnAction={() => dispatch(setIsFilterMenuOpen(true))}>
  //         Filters
  //       </AppButton>
  //       <Grid container spacing={2}>
  //         {cards.map((card) => {
  //           const {
  //             id,
  //             isStoredInFacility,
  //             photo,
  //             brand,
  //             model,
  //             haveDiscount,
  //             price,
  //             color,
  //             country,
  //             os,
  //             memory,
  //           } = card;
  //           return (
  //             <Grid
  //               item
  //               xs={12}
  //               sm={6}
  //               md={4}
  //               key={id}
  //               sx={{
  //                 maxHeight: '300px',
  //                 marginBottom: '20px',
  //               }}
  //             >
  //               <CustomizedCard>
  //                 <CustomizedCardMedia component="img" image={photo} alt="" />
  //                 <CustomizedCardContent>
  //                   <Typography variant="h5" component="h4" sx={{ flex: 0 }}>
  //                     {brand} - {model}
  //                   </Typography>
  //                   <Typography>{price} ₴</Typography>
  //                   <Typography>Color: {color}</Typography>
  //                   <Typography>Country: {country}</Typography>
  //                   <Typography>Memory: {memory} GB</Typography>
  //                   <Typography>OS: {os}</Typography>
  //                 </CustomizedCardContent>
  //                 <CardActions sx={{ gridArea: 'button' }}>
  //                   <AppButton
  //                     btnAction={() => {
  //                       dispatch(
  //                         setBasketItem({
  //                           id,
  //                           isStoredInFacility,
  //                           photo,
  //                           brand,
  //                           model,
  //                           haveDiscount,
  //                           price,
  //                           color,
  //                           country,
  //                           os,
  //                           memory,
  //                         })
  //                       );
  //                     }}
  //                   >
  //                     <AddIcon></AddIcon>
  //                   </AppButton>
  //                 </CardActions>
  //               </CustomizedCard>
  //             </Grid>
  //           );
  //         })}
  //       </Grid>
  //     </Container>
  //   );

  return <div> dasfsabdsa</div>;
};

export default Laptops;
