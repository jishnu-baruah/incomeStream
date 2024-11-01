import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertCircle } from 'lucide-react';

const Notification: React.FC = () => {
    const notificationVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className="notification"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
        >
            <h4><Bell size={18} /> Notifications & Updates</h4>
            <ul>
                <motion.li variants={notificationVariants}>
                    <AlertCircle size={14} /> New Transaction Update
                </motion.li>
                <motion.li variants={notificationVariants}>
                    <AlertCircle size={14} /> Contract Status Change
                </motion.li>
                <motion.li variants={notificationVariants}>
                    <AlertCircle size={14} /> New Notifications
                </motion.li>
            </ul>
        </motion.div>
    );
};

export default Notification;