import { db } from 'src/lib/db'

export const membersDbs = () => {
  return db.membersDb.findMany()
}

export const membersDb = ({ id }) => {
  return db.membersDb.findOne({
    where: { id },
  })
}

export const createMembersDb = ({ input }) => {
  return db.membersDb.create({
    data: input,
  })
}

export const updateMembersDb = ({ id, input }) => {
  return db.membersDb.update({
    data: input,
    where: { id },
  })
}

export const deleteMembersDb = ({ id }) => {
  return db.membersDb.delete({
    where: { id },
  })
}
