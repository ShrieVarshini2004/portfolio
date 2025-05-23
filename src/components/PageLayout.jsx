import { motion } from 'framer-motion'

const PageLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="page-container"
  >
    {children}
  </motion.div>
)

export default PageLayout