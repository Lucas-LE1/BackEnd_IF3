const { User } = require("../../Database/Models/User");
const { hashSync, genSaltSync } = require('bcrypt');

const UserCreate = async (req, res) => {

    try {
        const { registration, password, name } = req.body;

        const salt = genSaltSync(10);

        const [user, created] = await User.findOrCreate({
            where: { registration },
            defaults: { registration, name, password: hashSync(password, salt) }
        });

        created ?
            res.json({
                title: "Sucesso",
                subtitle: "Conta de usúario criada com sucesso."
            })
            : user ?
                res.json({
                    title: "Conta existente",
                    subtitle: "Usúario já cadastrado no sistema."
                })
                : null;

    } catch (error) {
        console.log(error)
        res.status(401).json({
            title: "erro no sistema",
            subtitle: "tente novamente mais tarde"
        })
    }

}

exports.UserCreate = UserCreate;