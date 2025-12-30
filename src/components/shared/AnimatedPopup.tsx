import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Box, Paper, IconButton, Typography, Fade, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface AnimatedPopupProps {
  trigger: ReactNode;
  title?: string;
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

const AnimatedPopup: React.FC<AnimatedPopupProps> = ({
  trigger,
  title,
  children,
  width = 400,
  height = 'auto',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Box onClick={handleOpen} sx={{ display: 'inline-block', cursor: 'pointer' }}>
        {trigger}
      </Box>

      <AnimatePresence>
        {isOpen && (
          <Fade in={isOpen}>
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(5px)',
                zIndex: 1300,
              }}
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Paper
                  elevation={24}
                  sx={{
                    width,
                    height,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, rgba(30,30,30,0.9), rgba(20,20,20,0.95))' 
                      : 'white',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset'
                      : '0 20px 60px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -100,
                      right: -100,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${theme.palette.primary.main}40, ${theme.palette.primary.main}00)`,
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -80,
                      left: -80,
                      width: 160,
                      height: 160,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${theme.palette.secondary.main}40, ${theme.palette.secondary.main}00)`,
                      zIndex: 0,
                    }}
                  />

                  {/* Header */}
                  {title && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 3,
                        borderBottom: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                      <IconButton
                        onClick={handleClose}
                        size="small"
                        sx={{
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'rotate(90deg)' },
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  )}

                  {/* Content */}
                  <Box
                    sx={{
                      p: 3,
                      maxHeight: title ? 'calc(90vh - 70px)' : '90vh',
                      overflowY: 'auto',
                      position: 'relative',
                      zIndex: 1,
                      '&::-webkit-scrollbar': {
                        width: '8px',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                        borderRadius: '4px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                        background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                      },
                    }}
                  >
                    {children}
                  </Box>

                  {/* Close button if no title */}
                  {!title && (
                    <IconButton
                      onClick={handleClose}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'rotate(90deg)' },
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </Paper>
              </motion.div>
            </Box>
          </Fade>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedPopup;
